'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/Header'
import { AdminDashboard } from '@/components/AdminDashboard'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Shield, Lock } from 'lucide-react'

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [passcode, setPasscode] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Check if already authenticated on component mount
  useEffect(() => {
    setIsClient(true)
    const savedPasscode = localStorage.getItem('adminPasscode')
    if (savedPasscode) {
      setIsAuthenticated(true)
      setPasscode(savedPasscode)
    }
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ passcode }),
      })

      if (response.ok) {
        localStorage.setItem('adminPasscode', passcode)
        setIsAuthenticated(true)
      } else {
        setError('Invalid passcode')
      }
    } catch (err) {
      setError('Authentication error')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminPasscode')
    setIsAuthenticated(false)
    setPasscode('')
  }

  // Don't render until client-side hydration
  if (!isClient) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-lg text-gray-600">Loading...</div>
        </div>
      </>
    )
  }

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <Shield className="mx-auto h-16 w-16 text-navy-800" />
              <h2 className="mt-6 text-3xl font-display font-bold text-gray-900">
                Admin Access
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Enter the admin passcode to access the dashboard
              </p>
            </div>
            
            <form className="mt-8 space-y-6" onSubmit={handleLogin}>
              <div>
                <Input
                  label="Admin Passcode"
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  error={error}
                  required
                  placeholder="Enter passcode"
                />
              </div>
              
              <Button
                type="submit"
                disabled={loading || !passcode}
                className="w-full"
              >
                <Lock className="w-4 h-4 mr-2" />
                {loading ? 'Authenticating...' : 'Access Dashboard'}
              </Button>
            </form>
            
            <div className="text-center text-sm text-gray-500">
              <p>Default passcode: <code className="bg-gray-100 px-2 py-1 rounded">change-me</code></p>
              <p className="mt-2">Update the ADMIN_PASSCODE environment variable for production.</p>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow">
          <div className="container-custom">
            <div className="flex items-center justify-between py-6">
              <div>
                <h1 className="text-3xl font-display font-bold text-gray-900">
                  Admin Dashboard
                </h1>
                <p className="text-gray-600">
                  Manage leads and track recruitment performance
                </p>
              </div>
              <Button onClick={handleLogout} variant="outline" size="sm">
                Logout
              </Button>
            </div>
          </div>
        </div>
        
        <div className="container-custom py-8">
          <AdminDashboard />
        </div>
      </div>
    </>
  )
}