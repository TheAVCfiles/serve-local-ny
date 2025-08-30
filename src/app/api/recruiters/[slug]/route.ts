import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const recruiter = await prisma.recruiter.findUnique({
      where: { 
        slug: params.slug,
        active: true,
      },
      include: {
        _count: {
          select: {
            leads: true
          }
        }
      }
    })
    
    if (!recruiter) {
      return NextResponse.json(
        { error: 'Recruiter not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({
      recruiter: {
        id: recruiter.id,
        slug: recruiter.slug,
        name: recruiter.name,
        rank: recruiter.rank,
        bio: recruiter.bio,
        email: recruiter.email,
        phone: recruiter.phone,
        leadCount: recruiter._count.leads,
      }
    })
  } catch (error) {
    console.error('Recruiter retrieval error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}