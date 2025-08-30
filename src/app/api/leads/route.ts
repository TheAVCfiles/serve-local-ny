import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

// Validation schema for lead submission
const leadSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  age: z.number().min(17).max(39).optional(),
  interests: z.array(z.string()).default([]),
  message: z.string().optional(),
  source: z.string().optional(),
  recruiterId: z.string().optional(),
})

// POST - Create new lead
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = leadSchema.parse(body)
    
    // If recruiterId is provided, verify the recruiter exists
    let recruiter = null
    if (validatedData.recruiterId) {
      recruiter = await prisma.recruiter.findUnique({
        where: { id: validatedData.recruiterId }
      })
      
      if (!recruiter) {
        return NextResponse.json(
          { error: 'Invalid recruiter ID' },
          { status: 400 }
        )
      }
    }
    
    // Create the lead
    const lead = await prisma.lead.create({
      data: {
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email,
        phone: validatedData.phone,
        age: validatedData.age,
        interests: validatedData.interests,
        message: validatedData.message,
        source: validatedData.source,
        recruiterId: validatedData.recruiterId,
      },
    })
    
    return NextResponse.json({
      success: true,
      lead: {
        id: lead.id,
        firstName: lead.firstName,
        lastName: lead.lastName,
        email: lead.email,
      }
    })
  } catch (error) {
    console.error('Lead creation error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid data', details: error.errors },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET - Retrieve leads (admin only)
export async function GET(request: Request) {
  try {
    // Check for admin authentication
    const { searchParams } = new URL(request.url)
    const passcode = searchParams.get('passcode')
    
    if (passcode !== process.env.ADMIN_PASSCODE) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    const leads = await prisma.lead.findMany({
      include: {
        recruiter: {
          select: {
            id: true,
            name: true,
            slug: true,
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
    
    return NextResponse.json({ leads })
  } catch (error) {
    console.error('Lead retrieval error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}