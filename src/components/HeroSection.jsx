import { ChevronDown, Play, Pause } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);


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
    // Example video entry (uncomment when you have video URLs):
    // {
    //   type: 'video',
    //   src: 'path/to/your-video.mp4',
    //   alt: 'Ayurvedic Treatment Process'
    // }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    setIsPlaying(false); // Pause auto-scroll when user manually selects
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-green-50 to-emerald-100 scroll-mt-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20"></div>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leaf-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M20 50c0-16.5 13.5-30 30-30s30 13.5 30 30-13.5 30-30 30-30-13.5-30-30z" fill="currentColor" fillOpacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                Traditional Ayurvedic Healing
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Ayurveda Through 
                <span className="text-green-600 block">Namaste</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience authentic Ayurvedic treatments at Kerala's premier healing center. 
                From postnatal care to rejuvenation therapies, we nurture your body, mind, and soul.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-700">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform text-center"
              >
                Start Your Journey
              </a>
              <a
                href="#treatments"
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors text-center"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Media Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Media Container */}
              <div className="relative h-96 lg:h-[500px]">
                {mediaItems.map((media, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentMediaIndex ? 'opacity-100' : 'opacity-0'
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

                {/* Green Overlay with Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 via-green-500/20 to-emerald-600/30"></div>
                
                {/* Decorative Pattern Overlay */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="hero-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                        <circle cx="30" cy="30" r="2" fill="white" fillOpacity="0.3"/>
                        <path d="M30 20c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10z" stroke="white" strokeWidth="0.5" fill="none" fillOpacity="0.2"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hero-pattern)"/>
                  </svg>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-2 drop-shadow-lg">
                      {mediaItems[currentMediaIndex]?.alt}
                    </h3>
                    <div className="w-16 h-1 bg-white/80 mx-auto rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Media Controls */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between">
                  {/* Play/Pause Button */}
                  <button
                    onClick={handleMediaControl}
                    className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </button>

                  {/* Dots Indicator */}
                  <div className="flex space-x-2">
                    {mediaItems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToMedia(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentMediaIndex
                            ? 'bg-white scale-110'
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Counter */}
                  <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {currentMediaIndex + 1} / {mediaItems.length}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-200 rounded-full opacity-60 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-200 rounded-full opacity-40 blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-green-600" />
      </div>
    </section>
  );
}