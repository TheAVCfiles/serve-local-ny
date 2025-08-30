import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { LeadForm } from '@/components/LeadForm'
import { Button } from '@/components/ui/Button'
import { Shield, Mail, Phone, Award } from 'lucide-react'

interface Recruiter {
  id: string
  slug: string
  name: string
  rank?: string
  bio?: string
  email?: string
  phone?: string
  leadCount: number
}

async function getRecruiter(slug: string): Promise<Recruiter | null> {
  try {
    // In a real app, this would be a server-side fetch
    // For development, we'll use a mock response for sgt-brandon
    if (slug === 'sgt-brandon') {
      return {
        id: 'mock-id',
        slug: 'sgt-brandon',
        name: 'Sergeant Brandon Rodriguez',
        rank: 'Sergeant',
        bio: 'Dedicated NY National Guard recruiter with 8 years of service. Passionate about helping New Yorkers discover meaningful careers in military service while serving their community. I specialize in cybersecurity, aviation, and medical career fields.',
        email: 'brandon.rodriguez@nyguard.mil',
        phone: '(555) 123-4567',
        leadCount: 15
      }
    }
    return null
  } catch (error) {
    console.error('Error fetching recruiter:', error)
    return null
  }
}

export default async function RecruiterPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const recruiter = await getRecruiter(params.slug)
  
  if (!recruiter) {
    notFound()
  }

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-navy-900 text-white">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-8 h-8 text-gold-400" />
                <span className="text-gold-400 font-semibold">NY National Guard Recruiter</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
                {recruiter.rank} {recruiter.name}
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                {recruiter.bio}
              </p>
              
              <div className="space-y-3">
                {recruiter.email && (
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gold-400" />
                    <a 
                      href={`mailto:${recruiter.email}`}
                      className="text-gray-300 hover:text-gold-400 transition-colors"
                    >
                      {recruiter.email}
                    </a>
                  </div>
                )}
                {recruiter.phone && (
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gold-400" />
                    <a 
                      href={`tel:${recruiter.phone}`}
                      className="text-gray-300 hover:text-gold-400 transition-colors"
                    >
                      {recruiter.phone}
                    </a>
                  </div>
                )}
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-gold-400" />
                  <span className="text-gray-300">
                    Helped {recruiter.leadCount}+ prospects explore military careers
                  </span>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-xl shadow-2xl p-8">
                <h3 className="text-2xl font-display font-bold text-navy-900 mb-2">
                  Connect with {recruiter.rank} {recruiter.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  Get personalized guidance about NY National Guard opportunities that match your goals.
                </p>
                <LeadForm recruiterId={recruiter.id} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-navy-900 mb-8 text-center">
              Areas of Expertise
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Cybersecurity</h3>
                <p className="text-gray-600">
                  Help you break into the high-demand cybersecurity field with military training and security clearances.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Aviation</h3>
                <p className="text-gray-600">
                  Explore aviation maintenance and operations careers that lead to commercial aviation opportunities.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Medical</h3>
                <p className="text-gray-600">
                  Launch your healthcare career with military medical training and civilian certifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-navy-900 mb-8">
              Success Stories
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <blockquote className="text-lg text-gray-700 italic mb-6">
                "Working with {recruiter.rank} {recruiter.name} was the best decision I made for my career. 
                The cybersecurity training I received in the NY National Guard led directly to my current job 
                at a Fortune 500 company. The security clearance and hands-on experience made all the difference."
              </blockquote>
              <div className="text-navy-900 font-semibold">
                - Alex J., Cybersecurity Analyst
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gold-500 section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-bold text-navy-900 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-navy-800 mb-8 max-w-2xl mx-auto">
            Don't wait to explore the opportunities available to you. 
            Connect with {recruiter.rank} {recruiter.name} today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {recruiter.phone && (
              <Button size="lg" variant="primary">
                <Phone className="w-5 h-5 mr-2" />
                Call {recruiter.phone}
              </Button>
            )}
            {recruiter.email && (
              <Button 
                size="lg" 
                variant="outline" 
                className="border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  )
}