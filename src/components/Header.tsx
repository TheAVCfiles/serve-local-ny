'use client'

import Link from 'next/link'
import { Shield, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Explore Careers', href: '/explore' },
    { name: 'Contact', href: '/#contact' },
  ]
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-navy-800" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-navy-900">NY National Guard</span>
              <span className="text-xs text-gold-600 font-semibold">SERVE LOCAL</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-navy-800 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/admin"
              className="bg-navy-800 hover:bg-navy-900 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              Admin
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-navy-800"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-navy-800 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/admin"
                className="block px-3 py-2 text-navy-800 font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Admin Dashboard
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}