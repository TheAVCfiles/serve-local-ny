// Mock Prisma client for development/build without database
interface MockPrismaClient {
  lead: {
    create: (data: any) => Promise<any>
    findMany: (options?: any) => Promise<any[]>
  }
  recruiter: {
    findUnique: (options: any) => Promise<any>
  }
  $disconnect: () => Promise<void>
}

const mockPrisma: MockPrismaClient = {
  lead: {
    create: async (data) => ({ id: 'mock-id', ...data.data }),
    findMany: async () => []
  },
  recruiter: {
    findUnique: async ({ where }) => {
      if (where.slug === 'sgt-brandon') {
        return {
          id: 'mock-recruiter-id',
          slug: 'sgt-brandon',
          name: 'Sergeant Brandon Rodriguez',
          rank: 'Sergeant',
          bio: 'Mock recruiter for development',
          email: 'brandon@example.com',
          phone: '555-123-4567',
          _count: { leads: 0 }
        }
      }
      return null
    }
  },
  $disconnect: async () => {}
}

// Try to use real Prisma if available, fallback to mock
let prisma: any
try {
  const { PrismaClient } = require('@prisma/client')
  const globalForPrisma = globalThis as unknown as {
    prisma: any | undefined
  }
  prisma = globalForPrisma.prisma ?? new PrismaClient()
  if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
} catch (error) {
  console.warn('Prisma client not available, using mock client')
  prisma = mockPrisma
}

export { prisma }