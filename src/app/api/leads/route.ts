import { NextRequest, NextResponse } from 'next/server'
import { handleLeadSubmission } from '@/actions/forms'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate request
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Submit lead via server action
    const result = await handleLeadSubmission({
      name: body.name,
      email: body.email,
      phone: body.phone,
      city: body.city || '',
      course: body.course || '',
      source: body.source || 'api',
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
    console.error('Lead API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
