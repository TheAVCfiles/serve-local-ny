'use client'

import { Header } from '@/components/Header'
import { LeadForm } from '@/components/LeadForm'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { Shield, Star, Users, Award, ChevronRight, Phone, Mail, MapPin } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                Serve Your <span className="text-gradient">Community.</span><br />
                Build Your <span className="text-gradient">Future.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join the New York National Guard and discover meaningful career opportunities 
                while serving your community. Gain valuable skills, earn education benefits, 
                and be part of something bigger than yourself.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary">
                  Start Your Journey
                </Button>
                <Link href="/explore">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900">
                    Explore Careers
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="lg:order-2">
              <div className="bg-white rounded-xl shadow-2xl p-8">
                <h3 className="text-2xl font-display font-bold text-navy-900 mb-6">
                  Get More Information
                </h3>
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 mb-4">
              Why Choose the NY National Guard?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the unique advantages of serving with the New York National Guard
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Serve Your State',
                description: 'Respond to emergencies and serve your local community when they need you most.'
              },
              {
                icon: Award,
                title: 'Education Benefits',
                description: 'Receive tuition assistance and access to specialized training programs.'
              },
              {
                icon: Users,
                title: 'Leadership Development',
                description: 'Build valuable leadership skills that translate to civilian career success.'
              },
              {
                icon: Star,
                title: 'Part-Time Service',
                description: 'Maintain your civilian career while serving one weekend per month.'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-navy-800" />
                </div>
                <h3 className="text-xl font-display font-semibold text-navy-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-navy-50 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: '10,000+', label: 'Active Members' },
              { number: '100+', label: 'Career Fields' },
              { number: '175+', label: 'Years of Service' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl sm:text-5xl font-display font-bold text-navy-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gold-500 section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-navy-800 mb-8 max-w-2xl mx-auto">
            Connect with a recruiter today to learn about opportunities that match your goals and interests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="primary">
              <Phone className="w-5 h-5 mr-2" />
              Call (555) 123-4567
            </Button>
            <Link href="/explore">
              <Button size="lg" variant="outline" className="border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white">
                Browse Careers
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy-900 mb-4">
                Contact Us
              </h2>
              <p className="text-xl text-gray-600">
                Multiple ways to connect with NY National Guard recruiters
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <Phone className="w-8 h-8 text-navy-800 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Call</h3>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-navy-800 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Email</h3>
                <p className="text-gray-600">info@nyguard.mil</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-navy-800 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Visit</h3>
                <p className="text-gray-600">Local Recruiting Station</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-8 w-8 text-gold-500" />
                <div>
                  <div className="font-display font-bold text-lg">NY National Guard</div>
                  <div className="text-sm text-gold-400">SERVE LOCAL</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                The New York National Guard: Citizens serving citizens, protecting our state and nation.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/explore" className="hover:text-gold-400 transition-colors">Explore Careers</Link></li>
                <li><Link href="/#contact" className="hover:text-gold-400 transition-colors">Contact</Link></li>
                <li><Link href="/admin" className="hover:text-gold-400 transition-colors">Admin</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-300">
                <li>(555) 123-4567</li>
                <li>info@nyguard.mil</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 New York National Guard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}