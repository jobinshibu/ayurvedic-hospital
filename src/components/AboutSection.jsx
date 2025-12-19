import { Heart, Users, Leaf, Sparkles, Award, TrendingUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState({});
  const [counters, setCounters] = useState({ patients: 0, therapists: 0, treatments: 0 });
  const sectionRef = useRef(null);

  const stats = [
    { number: 500, suffix: '+', label: 'Patients Treated', icon: Users, color: 'emerald' },
    { number: 10, suffix: '+', label: 'Expert Therapists', icon: Heart, color: 'rose' },
    { number: 50, suffix: '+', label: 'Herbal Treatments', icon: Leaf, color: 'green' }
  ];

  const values = [
    {
      title: 'Authentic Tradition',
      description: 'We follow ancient Ayurvedic principles passed down through generations, ensuring authentic and effective treatments.',
      icon: '🕉️',
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      title: 'Personalized Care',
      description: 'Every treatment plan is customized based on individual constitution, health condition, and wellness goals.',
      icon: '🤲',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Natural Healing',
      description: 'Using only pure, organic herbs and traditional methods to promote natural healing and wellness.',
      icon: '🌿',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Holistic Approach',
      description: 'We treat not just symptoms but focus on complete wellness of body, mind, and spirit.',
      icon: '☯️',
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  // Intersection Observer for scroll animations
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

  // Counter animation
  useEffect(() => {
    if (isVisible['stats-section']) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounters({
          patients: Math.floor(500 * progress),
          therapists: Math.floor(10 * progress),
          treatments: Math.floor(50 * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounters({ patients: 500, therapists: 10, treatments: 50 });
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [isVisible['stats-section']]);

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white via-green-50/30 to-white scroll-mt-12 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-green-200/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          id="about-header"
          data-animate
          className={`text-center mb-20 transition-all duration-1000 ${isVisible['about-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-sm font-semibold mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
              About Namaste Ayurveda
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-medium text-gray-900 mb-6 leading-tight">
            Healing Through
            <span className="block bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent animate-text-gradient bg-[length:200%_auto]">
              Ancient Wisdom
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Ayurveda Through Namaste. Uncover The Magic Of Nature
          </p>
        </div>

        {/* Our Story with Image */}
        <div
          id="story-section"
          data-animate
          className={`mb-28 transition-all duration-1000 ${isVisible['story-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story Image - LEFT SIDE - now with small rounding and slow pan */}
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <div className="relative h-[500px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Ayurvedic Wellness"
                  className="w-full h-full object-cover transform transition-transform duration-[20s] ease-linear group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>

                <div className="absolute bottom-8 left-8 right-8 z-10 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-2xl border border-white/20">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm font-bold text-emerald-800 tracking-wide uppercase">Certified Excellence</span>
                    </div>
                    <p className="text-gray-800 font-serif italic text-lg dark:text-gray-200">
                      "Preserving 5000+ years of Ayurvedic wisdom"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="space-y-6">
              <h3 className="text-4xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                Our Story
                <div className="h-1 w-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Namaste Ayurveda was born from a deep reverence for traditional healing wisdom and a passion for
                bringing authentic Ayurvedic care to modern wellness seekers. Inspired by the timeless teachings
                of ancient practitioners and guided by our commitment to natural healing, we have created a sanctuary
                where traditional knowledge meets contemporary wellness needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From our serene location in Kerala, we offer not just treatments but a complete transformation
                experience that nurtures your body, calms your mind, and elevates your spirit through the sacred
                art of Ayurveda.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Traditional Wisdom
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  Modern Wellness
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  Holistic Care
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        {/* Vision & Mission in One Row */}
        <div
          id="vision-mission-section"
          data-animate
          className={`mb-24 transition-all duration-1000 ${isVisible['vision-mission-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="group relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🌟</span>
                  </div>
                  <h3 className="text-3xl font-medium text-gray-800">Our Vision</h3>
                </div>

                <p className="text-base text-gray-700 leading-relaxed mb-8">
                  To be the leading center for authentic Ayurvedic healing, where ancient wisdom transforms
                  modern lives. We envision a world where natural healing is accessible to all, creating
                  a global community of wellness that honors traditional practices while embracing innovation.
                </p>

                <div className="space-y-4">
                  {['Global Wellness', 'Innovation in Tradition', 'Preventive Healthcare', 'Sustainable Living'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 group/item cursor-default">
                      <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center group-hover/item:bg-green-600 transition-all duration-300 shadow-sm border border-green-100">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover/item:scale-125 group-hover/item:bg-white transition-all duration-300"></div>
                      </div>
                      <span className="text-sm text-gray-700 font-medium group-hover/item:text-green-800 transition-colors duration-300 relative">
                        {item}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover/item:w-full"></span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="group relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🕉️</span>
                  </div>
                  <h3 className="text-3xl font-medium text-gray-800">Our Mission</h3>
                </div>

                <p className="text-base text-gray-700 leading-relaxed mb-8">
                  To provide authentic, personalized Ayurvedic treatments that restore balance and promote
                  natural healing. We are dedicated to preserving traditional knowledge while making it
                  accessible through compassionate care, expert guidance, and pure, organic remedies.
                </p>

                <div className="space-y-4">
                  {['Certified Practitioners', 'Organic Medicines', 'Traditional Methods', 'Personalized Care'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 group/item">
                      <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center group-hover/item:bg-amber-600 transition-all duration-300">
                        <div className="w-2 h-2 bg-amber-600 rounded-full group-hover/item:bg-white transition-colors duration-300"></div>
                      </div>
                      <span className="text-sm text-gray-800 font-medium group-hover/item:text-amber-700 transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics - Minimal Design */}
        <div
          id="stats-section"
          data-animate
          className={`mb-32 transition-all duration-1000 ${isVisible['stats-section'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
        >
          <div className="bg-white rounded-3xl shadow-sm border border-green-50 p-12">
            <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-green-100">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                const counterValue = index === 0 ? counters.patients : index === 1 ? counters.therapists : counters.treatments;

                return (
                  <div key={index} className="flex flex-col items-center pt-8 md:pt-0 px-4">
                    <div className={`mb-6 p-4 rounded-2xl bg-${stat.color}-50 text-${stat.color}-600 transform transition-transform duration-500 hover:scale-110`}>
                      <IconComponent className="w-8 h-8" />
                    </div>

                    <div className="text-5xl md:text-6xl font-light text-gray-900 mb-3 tracking-tight font-serif">
                      {counterValue}
                      <span className="text-green-500 text-4xl align-top ml-1">{stat.suffix}</span>
                    </div>

                    <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Core Values - Premium Design */}
        <div
          id="values-section"
          data-animate
          className={`relative py-24 transition-all duration-1000 ${isVisible['values-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {/* Subtle Section Background */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[80%] bg-gradient-to-r from-emerald-50/30 via-emerald-100/60 to-emerald-50/30 skew-y-3 -z-10"></div>

          <div className="text-center mb-24">
            <span className="text-emerald-600 font-semibold tracking-[0.2em] text-sm uppercase mb-4 block">Our Philosophy</span>
            <h3 className="text-5xl md:text-6xl font-serif text-slate-800 mb-6 tracking-tight relative inline-block">
              Core Values
              <span className="absolute -top-6 -right-8 text-6xl text-emerald-100/50 -z-10 animate-pulse-slow">✦</span>
            </h3>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
              Guiding principles that define our commitment to your holistic wellness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative h-full"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-full bg-white/80 backdrop-blur-sm p-10 rounded-2xl border border-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">

                  {/* Watermark Number */}
                  <div className="absolute top-2 right-4 text-9xl font-serif text-slate-50 opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-500 select-none">
                    0{index + 1}
                  </div>

                  {/* Gradient Glow on Hover */}
                  <div className={`absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine`} />

                  {/* Icon Container */}
                  <div className="relative mb-8 w-16 h-16">
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-10 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500`}></div>
                    <div className="absolute inset-0 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500">
                      {value.icon}
                    </div>
                  </div>

                  <h4 className="text-2xl font-serif text-slate-800 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                    {value.title}
                  </h4>

                  <p className="text-sm text-slate-600 leading-relaxed font-light relative z-10">
                    {value.description}
                  </p>

                  {/* Decorative Bottom Line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${value.gradient} w-0 group-hover:w-full transition-all duration-700 ease-in-out`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes text-gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-text-gradient {
          animation: text-gradient 3s ease infinite;
        }

        .animate-float {
            animation: float 3s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}