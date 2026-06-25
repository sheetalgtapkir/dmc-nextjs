import { NextRequest, NextResponse } from 'next/server'
import { handleEnquirySubmission } from '@/actions/forms'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate request
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Submit enquiry via server action
    const result = await handleEnquirySubmission({
      name: body.name,
      email: body.email,
      phone: body.phone || '',
      message: body.message,
    })

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: result.message },
      { status: 201 }
    )
  } catch (error) {
    console.error('Enquiry API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
