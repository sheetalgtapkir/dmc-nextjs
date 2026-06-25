import { createLead, createEnquiry } from './database'
import { Lead, Enquiry, FormState } from '@/types'

export async function submitLeadForm(data: Omit<Lead, 'id' | 'created_at'>): Promise<FormState> {
  try {
    await createLead(data)
    return {
      success: true,
      message: 'Thank you! We will contact you soon.',
    }
  } catch (error) {
    console.error('Error submitting lead:', error)
    return {
      success: false,
      error: 'Failed to submit form. Please try again.',
    }
  }
}

export async function submitEnquiryForm(data: Omit<Enquiry, 'id' | 'created_at'>): Promise<FormState> {
  try {
    await createEnquiry(data)
    return {
      success: true,
      message: 'Thank you for your enquiry. We will get back to you soon.',
    }
  } catch (error) {
    console.error('Error submitting enquiry:', error)
    return {
      success: false,
      error: 'Failed to submit enquiry. Please try again.',
    }
  }
}
