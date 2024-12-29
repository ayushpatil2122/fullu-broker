import { Building2, FileText, Wallet, FlaskRoundIcon as Flask, Home, Globe, UserX, ClipboardList, Heart, FileCheck } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: <Building2 className="w-8 h-8 text-gray-600" />,
      label: 'Builder Projects',
      isNew: true
    },
    {
      icon: <FileText className="w-8 h-8 text-gray-600" />,
      label: 'Sale Agreement',
      isNew: true
    },
    {
      icon: <Wallet className="w-8 h-8 text-gray-600" />,
      label: 'Home Loan'
    },
    {
      icon: <Flask className="w-8 h-8 text-gray-600" />,
      label: 'Property Legal Services'
    },
    {
      icon: <Home className="w-8 h-8 text-gray-600" />,
      label: 'Home Interiors',
      tag: 'Sale is live!'
    },
    {
      icon: <Globe className="w-8 h-8 text-gray-600" />,
      label: 'NoBroker For NRIs'
    }
  ]

  const features = [
    {
      icon: <UserX className="w-12 h-12 text-red-500" />,
      title: 'Avoid Brokers',
      description: 'We directly connect you to verified owners to save brokerage'
    },
    {
      icon: <ClipboardList className="w-12 h-12 text-red-500" />,
      title: 'Free Listing',
      description: 'Easy listing process. Also using WhatsApp'
    },
    {
      icon: <Heart className="w-12 h-12 text-red-500" />,
      title: 'Shortlist without Visit',
      description: 'Extensive Information makes it easy'
    },
    {
      icon: <FileCheck className="w-12 h-12 text-red-500" />,
      title: 'Rental Agreement',
      description: 'Assistance in creating rental agreement & Paper work'
    }
  ]

  return (
    <div className="py-12 px-4">
      {/* Services Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="relative mb-4">
                {service.icon}
                {service.isNew && (
                  <span className="absolute -top-2 -right-2 bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full">
                    New
                  </span>
                )}
                {service.tag && (
                  <span className="absolute -top-2 -right-2 bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full">
                    {service.tag}
                  </span>
                )}
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-red-500">
                {service.label}
              </span>
            </div>
          ))}
        </div>

        {/* Why Use NoBroker Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-center mb-12 relative">
            Why Use NoBroker
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <div className="w-24 h-px bg-gray-300" />
              <div className="w-2 h-2 rounded-full bg-red-500" />
            </div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-red-50">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

