import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { passcode } = body
    
    const adminPasscode = process.env.ADMIN_PASSCODE || 'change-me'
    
    if (passcode === adminPasscode) {
      return NextResponse.json({ 
        success: true,
        message: 'Authentication successful' 
      })
    } else {
      return NextResponse.json(
        { error: 'Invalid passcode' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('Auth error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}