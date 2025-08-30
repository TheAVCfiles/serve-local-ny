import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create default recruiter - Sgt Brandon
  const brandon = await prisma.recruiter.upsert({
    where: { slug: 'sgt-brandon' },
    update: {},
    create: {
      slug: 'sgt-brandon',
      name: 'Sergeant Brandon Rodriguez',
      rank: 'Sergeant',
      email: 'brandon.rodriguez@nyguard.mil',
      phone: '(555) 123-4567',
      bio: 'Dedicated NY National Guard recruiter with 8 years of service. Passionate about helping New Yorkers discover meaningful careers in military service while serving their community.',
      active: true,
    },
  })

  console.log('✅ Created recruiter:', brandon.name)

  // Create a few sample leads for demonstration
  const sampleLeads = [
    {
      firstName: 'Alex',
      lastName: 'Johnson',
      email: 'alex.johnson@email.com',
      phone: '(555) 234-5678',
      age: 23,
      interests: ['Cybersecurity', 'Intelligence'],
      message: 'Interested in cybersecurity roles and how the Guard can help with my tech career.',
      source: 'Social Media',
      recruiterId: brandon.id,
    },
    {
      firstName: 'Maria',
      lastName: 'Garcia',
      email: 'maria.garcia@email.com',
      phone: '(555) 345-6789',
      age: 27,
      interests: ['Medical', 'Aviation'],
      message: 'Currently a nurse, interested in military medical opportunities.',
      source: 'Website',
      recruiterId: brandon.id,
    },
    {
      firstName: 'David',
      lastName: 'Chen',
      email: 'david.chen@email.com',
      age: 21,
      interests: ['Engineering', 'Construction'],
      message: 'Engineering student looking for hands-on experience.',
      source: 'Referral',
      recruiterId: brandon.id,
    },
  ]

  for (const leadData of sampleLeads) {
    const lead = await prisma.lead.create({
      data: leadData,
    })
    console.log('✅ Created lead:', `${lead.firstName} ${lead.lastName}`)
  }

  console.log('🎯 Database seeded successfully!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })