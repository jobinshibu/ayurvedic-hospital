import { ChevronDown, Play, Pause } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const mediaItems = [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Ayurvedic Treatment Room'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Herbal Medicine Preparation'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      alt: 'Meditation and Wellness'
    },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Trigger entrance animations
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (isPlaying && mediaItems.length > 1) {
      const interval = setInterval(() => {
        setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isPlaying, mediaItems.length]);

  const features = [
    'Expert Ayurvedic Doctors',
    'Traditional Treatments',
    'Therapist Training Courses',
    'In-Patient Facilities'
  ];

  const handleMediaControl = () => {
    setIsPlaying(!isPlaying);
  };

  const goToMedia = (index) => {
    setCurrentMediaIndex(index);
    setIsPlaying(false);
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-green-50 to-emerald-100 scroll-mt-28 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 animate-gradient"></div>
        <svg className="absolute inset-0 w-full h-full animate-pulse-slow" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leaf-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 50c0-16.5 13.5-30 30-30s30 13.5 30 30-13.5 30-30 30-30-13.5-30-30z" fill="currentColor" fillOpacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-6">
              <span className={`inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transitionDelay: '100ms' }}>
                Traditional Ayurvedic Healing
              </span>
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: '200ms' }}>
                Ayurveda Through
                <span className="text-green-600 block animate-text-gradient bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-clip-text text-transparent bg-[length:200%_auto]">
                  Namaste
                </span>
              </h1>
              <p className={`text-xl text-gray-600 mb-8 leading-relaxed transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: '300ms' }}>
                Experience authentic Ayurvedic treatments at Kerala's premier healing center.
                From postnatal care to rejuvenation therapies, we nurture your body, mind, and soul.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex items-center space-x-3 text-gray-700 transition-all duration-700 hover:translate-x-2 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}>
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center animate-pulse-subtle">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '800ms' }}>
              <a
                href="#contact"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 text-center relative overflow-hidden group"
              >
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#treatments"
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all text-center transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Media Section */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-10 rotate-3'}`}
            style={{ transitionDelay: '400ms' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              {/* Media Container */}
              <div className="relative h-96 lg:h-[500px]">
                {mediaItems.map((media, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      index === currentMediaIndex 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-110'
                    }`}
                  >
                    {media.type === 'image' ? (
                      <img
                        src={media.src}
                        alt={media.alt}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <video
                        src={media.src}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    )}
                  </div>
                ))}

                {/* Animated Green Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 via-green-500/20 to-emerald-600/30 animate-gradient-slow"></div>

                {/* Decorative Pattern Overlay */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full animate-spin-slow" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="hero-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                        <circle cx="30" cy="30" r="2" fill="white" fillOpacity="0.3" />
                        <path d="M30 20c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10z" stroke="white" strokeWidth="0.5" fill="none" fillOpacity="0.2" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hero-pattern)" />
                  </svg>
                </div>

                {/* Content Overlay with Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`text-center text-white p-6 transition-all duration-700 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-2 drop-shadow-lg animate-fade-in">
                      {mediaItems[currentMediaIndex]?.alt}
                    </h3>
                    <div className="w-16 h-1 bg-white/80 mx-auto rounded-full animate-expand"></div>
                  </div>
                </div>
              </div>

              {/* Media Controls with Hover Effects */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between">
                  {/* Play/Pause Button */}
                  <button
                    onClick={handleMediaControl}
                    className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/40 transition-all hover:scale-110 active:scale-95"
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </button>

                  {/* Dots Indicator */}
                  <div className="flex space-x-2">
                    {mediaItems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToMedia(index)}
                        className={`w-3 h-3 rounded-full transition-all hover:scale-125 ${
                          index === currentMediaIndex
                            ? 'bg-white scale-110 animate-pulse-subtle'
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Counter */}
                  <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm hover:bg-white/30 transition-colors">
                    {currentMediaIndex + 1} / {mediaItems.length}
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-200 rounded-full opacity-60 blur-xl animate-blob"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-200 rounded-full opacity-40 blur-2xl animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 -right-8 w-20 h-20 bg-green-300 rounded-full opacity-50 blur-xl animate-blob animation-delay-4000"></div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <ChevronDown className="w-8 h-8 text-green-600 animate-pulse" />
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.5;
          }
        }

        @keyframes text-gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes expand {
          0% {
            width: 0;
          }
          100% {
            width: 4rem;
          }
        }

        @keyframes gradient {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.15;
          }
        }

        @keyframes pulse-subtle {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          50% {
            transform: translateY(-10px) translateX(-50%);
          }
        }

        @keyframes gradient-slow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-text-gradient {
          animation: text-gradient 3s ease infinite;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-expand {
          animation: expand 1s ease-out forwards;
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.7s ease-out;
        }

        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-gradient-slow {
          animation: gradient-slow 5s ease infinite;
          background-size: 200% 200%;
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