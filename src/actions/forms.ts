'use server'

import { submitLeadForm, submitEnquiryForm } from '@/services/forms'
import { Lead, Enquiry, FormState } from '@/types'

export async function handleLeadSubmission(data: Omit<Lead, 'id' | 'created_at'>): Promise<FormState> {
  try {
    // Validate input
    if (!data.name || !data.email || !data.phone) {
      return {
        success: false,
        error: 'Please fill in all required fields.',
      }
    }

    // Submit to database
    const result = await submitLeadForm(data)
    return result
  } catch (error) {
    console.error('Server action error:', error)
    return {
      success: false,
      error: 'An error occurred. Please try again.',
    }
  }
}

export async function handleEnquirySubmission(data: Omit<Enquiry, 'id' | 'created_at'>): Promise<FormState> {
  try {
    // Validate input
    if (!data.name || !data.email || !data.message) {
      return {
        success: false,
        error: 'Please fill in all required fields.',
      }
    }

    // Submit to database
    const result = await submitEnquiryForm(data)
    return result
  } catch (error) {
    console.error('Server action error:', error)
    return {
      success: false,
      error: 'An error occurred. Please try again.',
    }
  }
}
