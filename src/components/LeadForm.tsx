'use client'

import { useState } from 'react'
import { Button } from './ui/Button'
import { Input, Textarea } from './ui/Input'

interface LeadFormProps {
  recruiterId?: string
}

export function LeadForm({ recruiterId }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    interests: [] as string[],
    message: '',
    source: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  
  const militaryRoles = [
    'Cybersecurity',
    'Medical/Healthcare', 
    'Aviation',
    'Engineering',
    'Intelligence',
    'Logistics',
    'Communications',
    'Military Police',
    'Construction',
    'Transportation',
    'Administration',
    'Other'
  ]
  
  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          age: formData.age ? parseInt(formData.age) : null,
          recruiterId,
        }),
      })
      
      if (response.ok) {
        setSubmitted(true)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          age: '',
          interests: [],
          message: '',
          source: '',
        })
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setErrors({ submit: 'There was an error submitting your information. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }
  
  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="text-green-600 text-lg font-semibold mb-2">
          Thank you for your interest!
        </div>
        <p className="text-green-700">
          A recruiter will contact you within 2 business days to discuss opportunities that match your interests.
        </p>
        <Button
          variant="outline"
          onClick={() => setSubmitted(false)}
          className="mt-4"
        >
          Submit Another Lead
        </Button>
      </div>
    )
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="First Name"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          error={errors.firstName}
          required
        />
        <Input
          label="Last Name"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          error={errors.lastName}
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={errors.email}
          required
        />
        <Input
          label="Phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Age"
          type="number"
          min="17"
          max="39"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          helperText="Must be 17-39 years old"
        />
        <Input
          label="How did you hear about us?"
          value={formData.source}
          onChange={(e) => setFormData({ ...formData, source: e.target.value })}
          placeholder="Social media, friend, website, etc."
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Areas of Interest (select all that apply)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {militaryRoles.map((role) => (
            <label key={role} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.interests.includes(role)}
                onChange={() => handleInterestChange(role)}
                className="rounded border-gray-300 text-navy-600 focus:ring-navy-500"
              />
              <span className="text-sm text-gray-700">{role}</span>
            </label>
          ))}
        </div>
      </div>
      
      <Textarea
        label="Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        placeholder="Tell us about your goals, experience, or questions..."
        rows={4}
      />
      
      {errors.submit && (
        <div className="text-red-600 text-sm">{errors.submit}</div>
      )}
      
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Submitting...' : 'Get More Information'}
      </Button>
    </form>
  )
}