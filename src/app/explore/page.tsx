import { Header } from '@/components/Header'
import { RoleCard } from '@/components/RoleCard'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { Search, Filter, ChevronRight } from 'lucide-react'

const militaryRoles = [
  {
    title: 'Cybersecurity Specialist',
    description: 'Protect critical infrastructure and networks from cyber threats. Gain valuable experience in information security that translates directly to high-paying civilian careers.',
    requirements: [
      'High school diploma or equivalent',
      'U.S. citizenship',
      'Ability to obtain security clearance',
      'Basic computer skills'
    ],
    benefits: [
      'Security clearance for civilian career',
      'Industry certifications (CompTIA, CISSP)',
      'Up to $20,000 enlistment bonus',
      'Full tuition assistance'
    ],
    category: 'technical' as const
  },
  {
    title: 'Combat Medic',
    description: 'Provide emergency medical care in challenging environments. Training translates to civilian EMT, paramedic, and nursing careers.',
    requirements: [
      'High school diploma',
      'Physical fitness standards',
      'Clean medical history',
      'Age 17-35'
    ],
    benefits: [
      'National EMT certification',
      'Advanced medical training',
      'Civilian healthcare career pathway',
      'Student loan repayment up to $50,000'
    ],
    category: 'medical' as const
  },
  {
    title: 'Aviation Mechanic',
    description: 'Maintain and repair military aircraft. Gain experience with cutting-edge aviation technology and earn FAA certifications.',
    requirements: [
      'High school diploma',
      'Mechanical aptitude',
      'Pass background check',
      'Physical requirements met'
    ],
    benefits: [
      'FAA Airframe & Powerplant license',
      'Commercial aviation career path',
      'Advanced technical training',
      'Leadership development'
    ],
    category: 'technical' as const
  },
  {
    title: 'Military Police',
    description: 'Maintain order and enforce military law. Excellent preparation for civilian law enforcement careers.',
    requirements: [
      'U.S. citizenship',
      'Clean criminal record',
      'Physical fitness standards',
      'High school education'
    ],
    benefits: [
      'Law enforcement training',
      'Leadership experience',
      'Federal law enforcement preference',
      'Physical fitness maintenance'
    ],
    category: 'operations' as const
  },
  {
    title: 'Intelligence Analyst',
    description: 'Analyze data and information to support military operations. Develop critical thinking and analytical skills.',
    requirements: [
      'High school diploma',
      'U.S. citizenship',
      'Security clearance eligibility',
      'Strong analytical skills'
    ],
    benefits: [
      'Top Secret clearance',
      'Intelligence community career path',
      'Advanced analytical training',
      'Federal employment preference'
    ],
    category: 'technical' as const
  },
  {
    title: 'Logistics Specialist',
    description: 'Manage supply chains and coordinate transportation. Excellent foundation for business and supply chain careers.',
    requirements: [
      'High school education',
      'Organization skills',
      'Basic math proficiency',
      'Physical requirements'
    ],
    benefits: [
      'Supply chain management experience',
      'Business leadership skills',
      'Project management training',
      'Corporate career preparation'
    ],
    category: 'support' as const
  },
  {
    title: 'Communications Specialist',
    description: 'Operate and maintain communication systems. Build technical skills in telecommunications and network management.',
    requirements: [
      'High school diploma',
      'Technical aptitude',
      'Security clearance eligible',
      'Good communication skills'
    ],
    benefits: [
      'Telecommunications certifications',
      'Network administration training',
      'IT career pathway',
      'Advanced technical skills'
    ],
    category: 'technical' as const
  },
  {
    title: 'Human Resources Specialist',
    description: 'Manage personnel records and support soldier welfare. Develop business and people management skills.',
    requirements: [
      'High school education',
      'People skills',
      'Administrative abilities',
      'Attention to detail'
    ],
    benefits: [
      'HR management experience',
      'Business administration skills',
      'Corporate career preparation',
      'Leadership development'
    ],
    category: 'support' as const
  }
]

export default function ExplorePage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-navy-900 text-white">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              Explore Military <span className="text-gradient">Career Opportunities</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover over 100 career fields in the New York National Guard. 
              Gain valuable skills, earn certifications, and build a foundation for your civilian career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" variant="secondary">
                  Speak with a Recruiter
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900">
                <Search className="w-5 h-5 mr-2" />
                Find Your Match
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-navy-900 mb-4">
              Career Benefits & Training
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every military career includes comprehensive training, certifications, and benefits that enhance your civilian career prospects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Industry Certifications</h3>
              <p className="text-gray-600">Earn recognized certifications that employers value</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Advanced Training</h3>
              <p className="text-gray-600">Access to specialized military and civilian education</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChevronRight className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Career Advancement</h3>
              <p className="text-gray-600">Clear paths for promotion and leadership development</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Security Clearance</h3>
              <p className="text-gray-600">Valuable clearances for federal and defense careers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Roles Grid */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-navy-900 mb-4">
              Featured Career Fields
            </h2>
            <p className="text-xl text-gray-600">
              Explore some of our most popular and in-demand military occupational specialties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {militaryRoles.map((role, index) => (
              <RoleCard
                key={index}
                title={role.title}
                description={role.description}
                requirements={role.requirements}
                benefits={role.benefits}
                category={role.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-800 text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Ready to Start Your Military Career?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect with a recruiter to learn which career field matches your interests and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" variant="secondary">
                Submit Interest Form
              </Button>
            </Link>
            <Link href="/#contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900">
                Contact a Recruiter
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}