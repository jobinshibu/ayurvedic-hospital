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
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
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
            {/* Story Image - LEFT SIDE - now with small rounding */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-lg shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Ayurvedic Wellness"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 rounded-sm bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="w-6 h-6 text-green-600" />
                      <span className="text-sm font-semibold text-green-600">Certified Excellence</span>
                    </div>
                    <p className="text-gray-800 font-medium">
                      Preserving 5000+ years of Ayurvedic wisdom
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
            </div>

            {/* Story Content */}
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-3">
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
                  <h3 className="text-3xl font-semibold text-gray-800">Our Vision</h3>
                </div>

                <p className="text-base text-gray-700 leading-relaxed mb-8">
                  To be the leading center for authentic Ayurvedic healing, where ancient wisdom transforms
                  modern lives. We envision a world where natural healing is accessible to all, creating
                  a global community of wellness that honors traditional practices while embracing innovation.
                </p>

                <div className="space-y-4">
                  {['Global Wellness', 'Innovation in Tradition', 'Preventive Healthcare', 'Sustainable Living'].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 group/item">
                      <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center group-hover/item:bg-green-600 transition-all duration-300">
                        <div className="w-2 h-2 bg-green-600 rounded-full group-hover/item:bg-white transition-colors duration-300"></div>
                      </div>
                      <span className="text-sm text-gray-800 font-medium group-hover/item:text-green-700 transition-colors duration-300">{item}</span>
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
                  <h3 className="text-3xl font-semibold text-gray-800">Our Mission</h3>
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

        {/* Statistics */}
        <div
          id="stats-section"
          data-animate
          className={`mb-32 transition-all duration-1000 ${isVisible['stats-section'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
        >
          <div className="relative border-2 rounded-2xl border-green-200 to-slate-900 p-16 overflow-hidden">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

            {/* Golden accents */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>

            <div className="relative z-10 grid md:grid-cols-3 gap-16">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                const counterValue = index === 0 ? counters.patients : index === 1 ? counters.therapists : counters.treatments;

                return (
                  <div
                    key={index}
                    className="text-center group relative"
                  >
                    {/* Vertical divider (not on last item) */}
                    {index < 2 && (
                      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-slate-600 to-transparent"></div>
                    )}

                    <div className="inline-flex items-center justify-center w-20 h-20 mb-8 relative">
                      <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-500/20 transition-all duration-700"></div>
                      <div className="relative border border-amber-500/20 rounded-full p-4 group-hover:border-amber-500/40 transition-all duration-500">
                        <IconComponent className="w-8 h-8 text-amber-400" />
                      </div>
                    </div>

                    <div className="text-6xl md:text-7xl font-light text-white mb-4 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                      {counterValue}<span className="text-amber-400">{stat.suffix}</span>
                    </div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-[0.2em] letterspacing-widest">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div
          id="values-section"
          data-animate
          className={`transition-all duration-1000 ${isVisible['values-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-slate-300"></div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-[0.3em]">Philosophy</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-slate-300"></div>
            </div>
            <h3 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Our Core Values
            </h3>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              The principles that guide our practice and define our commitment to your wellness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative"
              >x
                {/* Hover glow effect */}
                <div className="absolute -inset-px bg-gradient-to-b from-amber-200/0 via-amber-200/50 to-amber-200/0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative h-full bg-white p-10 border border-slate-200 group-hover:border-amber-300/50 transition-all duration-500 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 w-0 h-px bg-gradient-to-r from-amber-400 to-transparent group-hover:w-full transition-all duration-700"></div>

                  {/* Icon */}
                  <div className="mb-8">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-amber-100/50 blur-xl rounded-full group-hover:bg-amber-200/50 transition-colors duration-500"></div>
                      <div className="relative text-5xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                        {value.icon}
                      </div>
                    </div>
                  </div>

                  <h4 className="text-xl font-light text-slate-900 mb-4 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                    {value.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {value.description}
                  </p>

                  {/* Bottom corner accent */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-slate-100 group-hover:border-amber-200 transition-colors duration-500"></div>
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

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-text-gradient {
          animation: text-gradient 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
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