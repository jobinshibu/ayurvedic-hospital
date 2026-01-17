import { Clock, Users, Leaf, Heart, Sparkles, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

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

  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="treatments" className="py-24 bg-gradient-to-br from-teal-950 via-emerald-900 to-green-950 scroll-mt-12 relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -z-10 animate-blob mix-blend-screen"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000 mix-blend-screen"></div>

      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          id="treatments-header"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${isVisible['treatments-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-800/50 text-emerald-100 rounded-full text-sm font-bold mb-6 border border-emerald-700/50 shadow-sm backdrop-blur-sm">
            <Leaf className="w-4 h-4 text-emerald-300" />
            Our Treatments
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tight">
            Authentic Ayurvedic Therapies
          </h2>
          <p className="text-xl text-emerald-100/80 max-w-3xl mx-auto leading-relaxed font-light">
            Experience the healing power of traditional Ayurveda through our comprehensive range of
            therapeutic treatments designed to restore balance and promote natural wellness
          </p>
        </div>

        {/* Main Treatments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {mainTreatments.map((treatment, index) => (
            <div
              key={treatment.id}
              id={`treatment-${treatment.id}`}
              data-animate
              className={`group relative overflow-hidden bg-emerald-950/30 backdrop-blur-md border border-white/30 rounded-[2rem] shadow-xl hover:shadow-2xl hover:shadow-emerald-900/40 transition-all duration-500 hover:-translate-y-2 ${isVisible[`treatment-${treatment.id}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* background overlay for hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${treatment.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              {/* Popular Badge */}
              {treatment.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform">
                    <Star className="w-3.5 h-3.5 mr-1 fill-white" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Image */}
              <div className="relative h-56 overflow-hidden m-2 rounded-[1.5rem] shadow-inner">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center">
                  <div className="text-3xl mr-3 filter drop-shadow-md transform group-hover:scale-110 transition-transform delay-100 drop-shadow-lg">{treatment.icon}</div>
                  <span className="text-white text-xs font-bold uppercase tracking-wider bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    {treatment.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                {/* Title & Description */}
                <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">{treatment.title}</h3>
                <p className="text-emerald-100/80 text-sm leading-relaxed mb-4 font-light min-h-[40px]">{treatment.description}</p>

                {/* Duration */}
                <div className="flex items-center mb-4 text-emerald-300 font-bold bg-emerald-500/10 w-fit px-3 py-1.5 rounded-lg border border-emerald-500/20">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">{treatment.duration}</span>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-2 gap-2">
                  {treatment.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start text-xs text-emerald-200/80 font-medium">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2 mt-1 flex-shrink-0 shadow-sm opacity-80"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Treatments */}
        <div
          id="special-treatments"
          data-animate
          className={`mb-20 transition-all duration-1000 ${isVisible['special-treatments'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-serif font-bold text-white mb-3">Specialized Therapies</h3>
            <p className="text-lg text-emerald-100/80 max-w-2xl mx-auto font-light">
              Additional traditional treatments available as part of comprehensive wellness programs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {specialTreatments.map((treatment, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:border-emerald-500/30 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/20"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 filter drop-shadow-sm">{treatment.icon}</div>
                <h4 className="font-bold text-white mb-1 text-sm group-hover:text-emerald-300 transition-colors">{treatment.name}</h4>
                <p className="text-[10px] uppercase tracking-wide text-emerald-200/60 font-bold group-hover:text-emerald-200">{treatment.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Treatment Process */}
        <div
          id="treatment-process"
          data-animate
          className={`relative py-12 transition-all duration-1000 ${isVisible['treatment-process'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-full bg-gradient-to-r from-emerald-900/50 to-teal-900/50 blur-3xl -z-10 opacity-60"></div>
          <div className="text-center mb-10">
            <h3 className="text-3xl font-serif font-bold text-white mb-3">Our Treatment Process</h3>
            <p className="text-lg text-emerald-100/80 max-w-2xl mx-auto font-light">
              A systematic approach to ensure the most effective and personalized healing experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatmentProcess.map((process, index) => (
              <div key={index} className="relative group">
                {/* Connection Line */}
                {index < treatmentProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-emerald-500/30 to-transparent z-0"></div>
                )}

                <div className="text-center relative z-10">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-emerald-500/30 group-hover:border-emerald-400 group-hover:bg-white/20 transition-all duration-300">
                    <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300 drop-shadow-md">{process.icon}</span>
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                    <div className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg border border-emerald-400">
                      {process.step}
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">{process.title}</h4>
                  <p className="text-emerald-100/70 text-sm leading-relaxed">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}