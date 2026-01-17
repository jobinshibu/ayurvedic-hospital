import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

export default function AyurvedaGallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const scrollContainerRef = useRef(null);

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
      title: 'Traditional Panchakarma Treatment',
      category: 'Treatment Rooms',
      description: 'Authentic Panchakarma therapy room with traditional setup'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      title: 'Herbal Medicine Preparation',
      category: 'Pharmacy',
      description: 'Fresh herbs being prepared for personalized treatments'
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      title: 'Meditation & Yoga Space',
      category: 'Wellness Areas',
      description: 'Serene meditation space for mental wellness programs'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      title: 'Postnatal Care Suite',
      category: 'Specialized Care',
      description: 'Dedicated space for new mother wellness treatments'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop',
      title: 'Therapeutic Massage Room',
      category: 'Treatment Rooms',
      description: 'Professional massage therapy in calming environment'
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=800&h=600&fit=crop',
      title: 'Consultation Chamber',
      category: 'Medical Facilities',
      description: 'Modern consultation room with traditional elements'
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      title: 'Herbal Steam Bath',
      category: 'Detox Facilities',
      description: 'Traditional steam therapy room with aromatic herbs'
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop',
      title: 'Reception & Waiting Area',
      category: 'Common Areas',
      description: 'Welcoming reception with traditional Indian architecture'
    }
  ];

  const thumbnails = galleryItems.slice(0, 6);

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, galleryItems.length]);

  const scrollToIndex = (index) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      const containerWidth = scrollContainerRef.current.clientWidth;
      const scrollPosition = (index / (galleryItems.length - 1)) * (scrollWidth - containerWidth);
      scrollContainerRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    scrollToIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1;
    scrollToIndex(prevIndex);
  };

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
    <section id="gallery" className="relative py-24 bg-gradient-to-br from-green-50/50 via-purple-50/30 to-blue-50/50 scroll-mt-12 overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/20 rounded-full blur-[100px] -z-10 animate-blob mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000 mix-blend-multiply"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-100/10 rounded-full blur-[120px] -z-10 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          id="gallery-header"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${isVisible['gallery-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-blue-50 rounded-full text-green-800 text-sm font-bold mb-6 border border-green-100 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Our Facilities
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 tracking-tight">
            Experience Our Healing Spaces
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Take a virtual tour of our state-of-the-art Ayurvedic treatment facilities designed for your complete wellness journey
          </p>
        </div>

        {/* Main Gallery Container */}
        <div
          id="gallery-container"
          data-animate
          className={`relative transition-all duration-1000 ${isVisible['gallery-container'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Featured Image */}
          <div className="relative h-[500px] md:h-[600px] mb-10 rounded-[2.5rem] overflow-hidden group shadow-2xl border-4 border-white/50 ring-1 ring-gray-100">
            <img
              src={galleryItems[currentIndex].src}
              alt={galleryItems[currentIndex].title}
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            {/* Content Overlay */}
            <div className="absolute bottom-10 left-10 right-10 text-white z-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold mb-4 border border-white/30 tracking-wide uppercase">
                    {galleryItems[currentIndex].category}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-serif font-bold mb-3 leading-tight text-white drop-shadow-lg">
                    {galleryItems[currentIndex].title}
                  </h3>
                  <p className="text-lg text-gray-200 max-w-2xl font-light leading-relaxed">
                    {galleryItems[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/90 hover:text-green-800 transition-all duration-300 hover:scale-110 border border-white/20 group/nav"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover/nav:text-green-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/90 hover:text-green-800 transition-all duration-300 hover:scale-110 border border-white/20 group/nav"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover/nav:text-green-800" />
            </button>

            {/* Auto-play Control */}
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="absolute top-8 right-8 w-10 h-10 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/90 hover:text-black transition-all duration-300 border border-white/20"
              title={isAutoPlay ? "Pause Autoplay" : "Start Autoplay"}
            >
              {isAutoPlay ? <Pause className="w-4 h-4 text-white hover:text-black" /> : <Play className="w-4 h-4 ml-0.5 text-white hover:text-black" />}
            </button>
          </div>

          {/* Horizontal Scrolling Thumbnails */}
          <div className="relative px-4">
            <div
              ref={scrollContainerRef}
              className="flex space-x-5 overflow-x-auto scrollbar-hide pb-2 pt-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {galleryItems.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => scrollToIndex(index)}
                  className={`flex-shrink-0 cursor-pointer transition-all duration-500 ease-out group ${index === currentIndex
                    ? 'scale-105'
                    : 'hover:scale-95 opacity-70 hover:opacity-100'
                    }`}
                >
                  <div className={`relative w-36 h-28 md:w-48 md:h-32 rounded-2xl overflow-hidden shadow-md ${index === currentIndex ? 'ring-4 ring-green-500/50 ring-offset-2' : ''
                    }`}>
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h4 className="text-white text-xs font-bold truncate">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 text-[10px] uppercase tracking-wider truncate">
                        {item.category}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${index === currentIndex
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 w-10'
                    : 'bg-gray-200 w-2 hover:w-4 hover:bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Gallery Stats - Redesigned */}
          <div
            id="gallery-stats"
            data-animate
            className={`mt-20 transition-all duration-1000 delay-300 ${isVisible['gallery-stats'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-xl border border-white/60 p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -z-10 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 opacity-50"></div>

              <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
                <div className="px-4 py-2 group cursor-default">
                  <div className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-br from-green-600 to-emerald-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {galleryItems.length}+
                  </div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Treatment Rooms</div>
                </div>
                <div className="px-4 py-2 group cursor-default">
                  <div className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                    5000+
                  </div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Sq.ft Facility</div>
                </div>
                <div className="px-4 py-2 group cursor-default">
                  <div className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-br from-orange-500 to-red-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">
                    24/7
                  </div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Care Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}