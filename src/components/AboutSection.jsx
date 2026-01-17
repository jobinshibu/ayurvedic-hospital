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
      gradient: 'from-amber-500 to-orange-600',
      bgTheme: 'bg-gradient-to-br from-amber-50 to-orange-100',
      border: 'border-amber-200'
    },
    {
      title: 'Personalized Care',
      description: 'Every treatment plan is customized based on individual constitution, health condition, and wellness goals.',
      icon: '🤲',
      gradient: 'from-blue-500 to-indigo-600',
      bgTheme: 'bg-gradient-to-br from-blue-50 to-indigo-100',
      border: 'border-blue-200'
    },
    {
      title: 'Natural Healing',
      description: 'Using only pure, organic herbs and traditional methods to promote natural healing and wellness.',
      icon: '🌿',
      gradient: 'from-green-500 to-emerald-600',
      bgTheme: 'bg-gradient-to-br from-green-50 to-emerald-100',
      border: 'border-green-200'
    },
    {
      title: 'Holistic Approach',
      description: 'We treat not just symptoms but focus on complete wellness of body, mind, and spirit.',
      icon: '☯️',
      gradient: 'from-purple-500 to-pink-600',
      bgTheme: 'bg-gradient-to-br from-purple-50 to-pink-100',
      border: 'border-purple-200'
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
    <section id="about" className="relative py-24 bg-gradient-to-br from-stone-50 via-white to-orange-50/50 scroll-mt-12 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-orange-100/20 rounded-full blur-[100px] animate-blob mix-blend-multiply"></div>
        <div className="absolute bottom-40 left-10 w-[600px] h-[600px] bg-green-100/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-blue-100/10 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          id="about-header"
          data-animate
          className={`text-center mb-20 transition-all duration-1000 ${isVisible['about-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-sm font-bold mb-6 shadow-sm border border-green-200">
            <Sparkles className="w-4 h-4 text-green-700" />
            <span className="bg-gradient-to-r from-green-800 to-emerald-800 bg-clip-text text-transparent uppercase tracking-wider text-xs">
              About Namaste Ayurveda
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Healing Through
            <span className="block bg-gradient-to-r from-green-700 via-emerald-600 to-teal-700 bg-clip-text text-transparent animate-text-gradient bg-[length:200%_auto]">
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
            {/* Story Image - LEFT SIDE - Refined visual */}
            <div className="relative group p-4">
              {/* Elegant border frame effect */}
              <div className="absolute inset-0 border-2 border-green-100/50 rounded-[2rem] transform rotate-2 transition-transform duration-500 group-hover:rotate-0"></div>

              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="relative h-[550px] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Ayurvedic Wellness"
                    className="w-full h-full object-cover transform transition-transform duration-[20s] ease-linear group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="absolute bottom-8 left-8 right-8 z-10 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                    <div className="bg-white/95 backdrop-blur-xl rounded-xl p-6 shadow-2xl border border-white/40">
                      <div className="flex items-center gap-3 mb-2">
                        <Award className="w-5 h-5 text-emerald-600" />
                        <span className="text-sm font-bold text-emerald-800 tracking-wide uppercase">Certified Excellence</span>
                      </div>
                      <p className="text-gray-800 font-serif italic text-xl">
                        "Preserving 5000+ years of Ayurvedic wisdom"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="space-y-8">
              <h3 className="text-4xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-4">
                Our Story
                <div className="h-0.5 w-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                <span className="font-serif text-3xl text-green-600 float-left mr-2 mt-[-10px]">N</span>
                amaste Ayurveda was born from a deep reverence for traditional healing wisdom and a passion for
                bringing authentic Ayurvedic care to modern wellness seekers. Inspired by the timeless teachings
                of ancient practitioners and guided by our commitment to natural healing, we have created a sanctuary
                where traditional knowledge meets contemporary wellness needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                From our serene location in Kerala, we offer not just treatments but a complete transformation
                experience that nurtures your body, calms your mind, and elevates your spirit through the sacred
                art of Ayurveda.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-6 py-2.5 bg-gradient-to-r from-green-50 to-green-100 text-green-800 rounded-full text-sm font-bold border border-green-200">
                  Traditional Wisdom
                </span>
                <span className="px-6 py-2.5 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 rounded-full text-sm font-bold border border-blue-200">
                  Modern Wellness
                </span>
                <span className="px-6 py-2.5 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-800 rounded-full text-sm font-bold border border-purple-200">
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
            <div className="group relative bg-gradient-to-br from-green-50/80 to-emerald-50/80 rounded-3xl p-10 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] border border-green-100/80">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-green-200 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-green-100 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🌟</span>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-gray-800">Our Vision</h3>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light">
                  To be the leading center for authentic Ayurvedic healing, where ancient wisdom transforms
                  modern lives. We envision a world where natural healing is accessible to all, creating
                  a global community of wellness that honors traditional practices while embracing innovation.
                </p>

                <div className="space-y-4">
                  {['Global Wellness', 'Innovation in Tradition', 'Preventive Healthcare', 'Sustainable Living'].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 group/item cursor-default">
                      <div className="w-2 h-2 bg-green-300 rounded-full group-hover/item:bg-green-600 group-hover/item:scale-150 transition-all duration-300"></div>
                      <span className="text-base text-gray-600 group-hover/item:text-green-800 transition-colors duration-300 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="group relative bg-gradient-to-br from-amber-50/80 to-orange-50/80 rounded-3xl p-10 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] border border-amber-100/80">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-orange-200 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-amber-100 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🕉️</span>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-gray-800">Our Mission</h3>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light">
                  To provide authentic, personalized Ayurvedic treatments that restore balance and promote
                  natural healing. We are dedicated to preserving traditional knowledge while making it
                  accessible through compassionate care, expert guidance, and pure, organic remedies.
                </p>

                <div className="space-y-4">
                  {['Certified Practitioners', 'Organic Medicines', 'Traditional Methods', 'Personalized Care'].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 group/item">
                      <div className="w-2 h-2 bg-amber-300 rounded-full group-hover/item:bg-amber-600 group-hover/item:scale-150 transition-all duration-300"></div>
                      <span className="text-base text-gray-600 group-hover/item:text-amber-800 transition-colors duration-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics - Floating Pillars Design */}
        <div
          id="stats-section"
          data-animate
          className={`mb-32 px-4 transition-all duration-1000 ${isVisible['stats-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              const counterValue = index === 0 ? counters.patients : index === 1 ? counters.therapists : counters.treatments;

              // Define custom styles for each card based on index/stat to match "mild and strong" theme
              const cardStyles = [
                {
                  bg: "bg-gradient-to-b from-emerald-50 to-white",
                  border: "border-emerald-100",
                  shadow: "shadow-emerald-100",
                  iconBg: "bg-emerald-100",
                  text: "text-emerald-900",
                  accent: "text-emerald-500"
                },
                {
                  bg: "bg-gradient-to-b from-rose-50 to-white",
                  border: "border-rose-100",
                  shadow: "shadow-rose-100",
                  iconBg: "bg-rose-100",
                  text: "text-rose-900",
                  accent: "text-rose-500"
                },
                {
                  bg: "bg-gradient-to-b from-amber-50 to-white",
                  border: "border-amber-100",
                  shadow: "shadow-amber-100",
                  iconBg: "bg-amber-100",
                  text: "text-amber-900",
                  accent: "text-amber-500"
                }
              ][index];

              return (
                <div
                  key={index}
                  className={`relative ${cardStyles.bg} rounded-[2rem] p-8 border ${cardStyles.border} shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group overflow-hidden`}
                >
                  {/* Decorative Background Blob */}
                  <div className={`absolute -right-10 -top-10 w-40 h-40 ${cardStyles.iconBg} rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity`}></div>

                  <div className="relative flex flex-col items-center text-center">
                    {/* Floating Icon */}
                    <div className={`mb-6 p-6 rounded-2xl ${cardStyles.iconBg} ${cardStyles.accent} shadow-inner transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <IconComponent className="w-10 h-10" strokeWidth={1.5} />
                    </div>

                    {/* Number */}
                    <div className={`text-6xl font-serif font-bold ${cardStyles.text} mb-2 tracking-tight flex items-start justify-center`}>
                      {counterValue}
                      <span className={`text-3xl mt-1 ml-1 ${cardStyles.accent} font-medium`}>{stat.suffix}</span>
                    </div>

                    {/* Label */}
                    <div className="h-0.5 w-12 bg-gray-200 my-4 group-hover:w-24 transition-all duration-500"></div>

                    <div className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] group-hover:text-gray-600 transition-colors">
                      {stat.label}
                    </div>
                  </div>

                  {/* Bottom Line Accent */}
                  <div className={`absolute bottom-0 left-0 w-full h-1.5 ${cardStyles.iconBg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Values - Premium Design */}
        <div
          id="values-section"
          data-animate
          className={`relative py-12 transition-all duration-1000 ${isVisible['values-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {/* Subtle Section Background */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[120%] bg-gradient-to-r from-emerald-50/40 via-emerald-100/40 to-emerald-50/40 skew-y-2 -z-10 rounded-[3rem]"></div>

          <div className="text-center mb-24">
            <span className="text-emerald-700 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Our Philosophy</span>
            <h3 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6 tracking-tight relative inline-block font-bold">
              Core Values
              <span className="absolute -top-6 -right-8 text-6xl text-emerald-200 -z-10 animate-pulse-slow">✦</span>
            </h3>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
              Guiding principles that define our commitment to your holistic wellness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative h-full"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`relative h-full ${value.bgTheme} p-8 rounded-3xl border ${value.border} shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}>

                  {/* Watermark Number */}
                  <div className="absolute -top-4 -right-4 text-[8rem] font-serif text-white opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700 select-none -z-10">
                    0{index + 1}
                  </div>

                  {/* Icon Container */}
                  <div className="relative mb-8 w-16 h-16">
                    <div className="absolute inset-0 bg-white opacity-40 rounded-2xl rotate-3 group-hover:rotate-12 transition-transform duration-500"></div>
                    <div className="absolute inset-0 bg-white border border-white/50 rounded-2xl shadow-sm flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500 z-10">
                      {value.icon}
                    </div>
                  </div>

                  <h4 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-emerald-900 transition-colors duration-300">
                    {value.title}
                  </h4>

                  <p className="text-sm text-slate-700 leading-relaxed font-medium relative z-10 group-hover:text-slate-900 transition-colors">
                    {value.description}
                  </p>

                  {/* Decorative Bottom Line */}
                  <div className={`absolute bottom-0 left-0 h-1.5 bg-gradient-to-r ${value.gradient} w-0 group-hover:w-full transition-all duration-700 ease-in-out`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}