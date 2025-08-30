import React from 'react'
import { Badge, Users, Award, Briefcase } from 'lucide-react'

interface RoleCardProps {
  title: string
  description: string
  requirements: string[]
  benefits: string[]
  category: 'technical' | 'medical' | 'operations' | 'support'
}

export function RoleCard({ title, description, requirements, benefits, category }: RoleCardProps) {
  const categoryStyles = {
    technical: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'text-blue-600',
      badge: 'bg-blue-100 text-blue-800'
    },
    medical: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: 'text-green-600',
      badge: 'bg-green-100 text-green-800'
    },
    operations: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      icon: 'text-purple-600',
      badge: 'bg-purple-100 text-purple-800'
    },
    support: {
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      icon: 'text-orange-600',
      badge: 'bg-orange-100 text-orange-800'
    }
  }

  const style = categoryStyles[category]
  const IconComponent = category === 'technical' ? Briefcase : 
                      category === 'medical' ? Users :
                      category === 'operations' ? Badge : Award

  return (
    <div className={`rounded-lg border ${style.border} ${style.bg} p-6 h-full flex flex-col`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <IconComponent className={`w-6 h-6 ${style.icon}`} />
          <h3 className="text-xl font-display font-semibold text-gray-900">{title}</h3>
        </div>
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${style.badge}`}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </span>
      </div>
      
      <p className="text-gray-700 mb-4 flex-grow">{description}</p>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {requirements.map((req, index) => (
              <li key={index} className="flex items-start">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                {req}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}