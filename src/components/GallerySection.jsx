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

  return (
    <section id="gallery" className="py-16 bg-gradient-to-b from-green-50 via-blue-50 to-purple-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 rounded-full text-sm font-medium mb-4">
            Our Facilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience Our Healing Spaces
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take a virtual tour of our state-of-the-art Ayurvedic treatment facilities designed for your complete wellness journey
          </p>
        </div>

        {/* Main Gallery Container */}
        <div className="relative">
          {/* Featured Image */}
          <div className="relative h-96 md:h-[500px] mb-8 rounded-3xl overflow-hidden group shadow-2xl">
            <img 
              src={galleryItems[currentIndex].src}
              alt={galleryItems[currentIndex].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            
            {/* Content Overlay */}
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-3">
                    {galleryItems[currentIndex].category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">
                    {galleryItems[currentIndex].title}
                  </h3>
                  <p className="text-lg text-gray-200 max-w-2xl">
                    {galleryItems[currentIndex].description}
                  </p>
                </div>
                

              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Auto-play Control */}
            <button 
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              {isAutoPlay ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
            </button>
          </div>

          {/* Horizontal Scrolling Thumbnails */}
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {galleryItems.map((item, index) => (
                <div 
                  key={item.id}
                  onClick={() => scrollToIndex(index)}
                  className={`flex-shrink-0 cursor-pointer transition-all duration-300 ${
                    index === currentIndex 
                      ? 'ring-4 ring-green-400 ring-offset-2 scale-105' 
                      : 'hover:scale-105 hover:ring-2 hover:ring-green-300 hover:ring-offset-1'
                  }`}
                >
                  <div className="relative w-32 h-24 md:w-40 md:h-28 rounded-xl overflow-hidden">
                    <img 
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <h4 className="text-white text-xs font-semibold truncate">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 text-xs truncate">
                        {item.category}
                      </p>
                    </div>
                    {index === currentIndex && (
                      <div className="absolute inset-0 border-2 border-white rounded-xl"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-green-500 w-8' 
                      : 'bg-gray-300 hover:bg-green-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Gallery Stats */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-white rounded-2xl px-8 py-4 shadow-lg">
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    {galleryItems.length}+
                  </div>
                  <div className="text-sm text-gray-600">Treatment Rooms</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    5000+
                  </div>
                  <div className="text-sm text-gray-600">Sq.ft Facility</div>
                </div>
                <div className="w-px h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600">Care Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}