import { Clock, Users, Leaf, Heart, Sparkles, Star } from 'lucide-react';

export default function TreatmentsSection() {
  const mainTreatments = [
    {
      id: 1,
      title: 'Panchakarma Therapy',
      category: 'Detoxification',
      description: 'Complete body detoxification and rejuvenation through five sacred cleansing procedures.',
      duration: '7-21 days',
      benefits: ['Deep detoxification', 'Stress relief', 'Enhanced immunity', 'Mental clarity'],
      icon: '🌿',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      popular: true
    },
    {
      id: 2,
      title: 'Postnatal Care',
      category: 'Maternal Wellness',
      description: 'Specialized traditional treatments for new mothers, focusing on recovery and strength restoration.',
      duration: '28-42 days',
      benefits: ['Faster recovery', 'Hormonal balance', 'Strength restoration', 'Lactation support'],
      icon: '🤱',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop',
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50'
    },
    {
      id: 3,
      title: 'Rejuvenation Therapy',
      category: 'Anti-Aging',
      description: 'Ancient anti-aging treatments that restore vitality and improve skin health through natural methods.',
      duration: '14-28 days',
      benefits: ['Skin rejuvenation', 'Energy boost', 'Anti-aging', 'Vitality enhancement'],
      icon: '✨',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 4,
      title: 'Stress Management',
      category: 'Mental Wellness',
      description: 'Comprehensive stress relief programs combining traditional therapies and meditation for mental peace.',
      duration: '7-14 days',
      benefits: ['Stress reduction', 'Better sleep', 'Mental clarity', 'Emotional balance'],
      icon: '🧘',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 5,
      title: 'Pain Management',
      category: 'Therapeutic',
      description: 'Natural pain relief treatments for joint pain, arthritis, and musculoskeletal conditions.',
      duration: '10-21 days',
      benefits: ['Pain relief', 'Improved mobility', 'Reduced inflammation', 'Natural healing'],
      icon: '🦴',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop',
      color: 'from-orange-500 to-amber-600',
      bgColor: 'bg-orange-50'
    },
    {
      id: 6,
      title: 'Weight Management',
      category: 'Lifestyle',
      description: 'Holistic weight management program combining dietary guidance and herbal treatments.',
      duration: '21-45 days',
      benefits: ['Healthy weight loss', 'Metabolism boost', 'Lifestyle changes', 'Long-term results'],
      icon: '⚖️',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-teal-50'
    }
  ];

  const specialTreatments = [
    { name: 'Abhyanga', description: 'Full body oil massage', icon: '💆' },
    { name: 'Shirodhara', description: 'Continuous oil pouring therapy', icon: '🛢️' },
    { name: 'Swedana', description: 'Herbal steam therapy', icon: '💨' },
    { name: 'Nasya', description: 'Nasal cleansing treatment', icon: '👃' },
    { name: 'Pizhichil', description: 'Royal oil bath treatment', icon: '👑' },
    { name: 'Udvartana', description: 'Herbal powder massage', icon: '🌾' }
  ];

  const treatmentProcess = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Detailed health assessment and dosha analysis',
      icon: '📋'
    },
    {
      step: 2,
      title: 'Personalized Plan',
      description: 'Custom treatment plan based on your constitution',
      icon: '📝'
    },
    {
      step: 3,
      title: 'Treatment Phase',
      description: 'Authentic therapies by certified practitioners',
      icon: '🏥'
    },
    {
      step: 4,
      title: 'Follow-up Care',
      description: 'Ongoing support and lifestyle guidance',
      icon: '🤝'
    }
  ];

  return (
    <section id="treatments" className="py-16 bg-gradient-to-b from-green-50 to-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            Our Treatments
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Authentic Ayurvedic Therapies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the healing power of traditional Ayurveda through our comprehensive range of
            therapeutic treatments designed to restore balance and promote natural wellness
          </p>
        </div>

        {/* Main Treatments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {mainTreatments.map((treatment) => (
            <div key={treatment.id} className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              {/* Popular Badge */}
              {treatment.popular && (
                <div className="absolute top-3 right-3 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center shadow-lg">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </div>
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 flex items-center">
                  <div className="text-2xl mr-2">{treatment.icon}</div>
                  <span className="text-white text-sm font-medium bg-black/30 px-2 py-1 rounded-full">
                    {treatment.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{treatment.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{treatment.description}</p>

                {/* Duration */}
                <div className="flex items-center mb-3 text-gray-700">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">{treatment.duration}</span>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-2 gap-1">
                  {treatment.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-xs text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Treatments */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Specialized Therapies</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Additional traditional treatments available as part of comprehensive wellness programs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {specialTreatments.map((treatment, index) => (
              <div key={index} className="text-center p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow group">
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{treatment.icon}</div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm">{treatment.name}</h4>
                <p className="text-xs text-gray-600">{treatment.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Treatment Process */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Treatment Process</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to ensure the most effective and personalized healing experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatmentProcess.map((process, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < treatmentProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-green-300 to-transparent transform translate-x-4"></div>
                )}

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <span className="text-2xl">{process.icon}</span>
                  </div>
                  <div className="bg-white p-1 rounded-full w-6 h-6 flex items-center justify-center mx-auto -mt-8 mb-3 shadow-md">
                    <span className="text-xs font-bold text-green-600">{process.step}</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{process.title}</h4>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}