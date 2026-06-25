import { supabase } from '@/lib/supabase'
import { Lead, Enquiry, University, Course } from '@/types'

// ============ LEADS ============

export async function createLead(data: Omit<Lead, 'id' | 'created_at'>) {
  const { data: lead, error } = await supabase
    .from('leads')
    .insert([data])
    .select()
    .single()

  if (error) throw error
  return lead
}

export async function getLeads() {
  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

// ============ ENQUIRIES ============

export async function createEnquiry(data: Omit<Enquiry, 'id' | 'created_at'>) {
  const { data: enquiry, error } = await supabase
    .from('enquiries')
    .insert([data])
    .select()
    .single()

  if (error) throw error
  return enquiry
}

export async function getEnquiries() {
  const { data, error } = await supabase
    .from('enquiries')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

// ============ UNIVERSITIES ============

export async function getUniversities() {
  const { data, error } = await supabase
    .from('universities')
    .select('*')
    .order('ranking', { ascending: true })

  if (error) throw error
  return data as University[]
}

export async function getUniversityBySlug(slug: string) {
  const { data, error } = await supabase
    .from('universities')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) throw error
  return data as University
}

export async function createUniversity(data: Omit<University, 'id' | 'created_at'>) {
  const { data: university, error } = await supabase
    .from('universities')
    .insert([data])
    .select()
    .single()

  if (error) throw error
  return university
}

// ============ COURSES ============

export async function getCoursesByUniversity(universityId: string) {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .eq('university_id', universityId)

  if (error) throw error
  return data as Course[]
}

export async function createCourse(data: Omit<Course, 'id' | 'created_at'>) {
  const { data: course, error } = await supabase
    .from('courses')
    .insert([data])
    .select()
    .single()

  if (error) throw error
  return course
}
