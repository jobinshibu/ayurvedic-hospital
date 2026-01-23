import { Quote, Star, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function DoctorsTestimonialSection() {
  const doctorsTestimonials = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      designation: 'Chief Ayurvedic Physician',
      specialization: 'Panchakarma & Detox Specialist',
      photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
      testimonial: 'Our authentic treatments have transformed thousands of lives. The combination of traditional wisdom and modern care delivers exceptional healing results.',
      experience: '15+ Years',
      rating: 5
    },
    {
      id: 2,
      name: 'Dr. Priya Nair',
      designation: 'Senior Ayurvedic Consultant',
      specialization: 'Women\'s Health & Postnatal Care',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
      testimonial: 'Every patient receives personalized care rooted in ancient Ayurvedic principles. Our holistic approach ensures complete wellness and natural healing.',
      experience: '12+ Years',
      rating: 5
    },
    {
      id: 3,
      name: 'Dr. Arun Menon',
      designation: 'Ayurvedic Pain Management Expert',
      specialization: 'Orthopedic & Joint Care',
      photo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face',
      testimonial: 'Natural pain relief through Ayurveda has proven more effective than conventional methods. Patients experience lasting relief without side effects.',
      experience: '18+ Years',
      rating: 5
    }
  ];

  const customerReviews = [
    {
      id: 1,
      name: 'Sanjay R.',
      location: 'Kochi, Kerala',
      initial: 'S',
      avatarColor: 'bg-blue-500',
      review: 'Excellent Ayurvedic treatment! Dr. Rajesh provided personalized care for my back pain. After 2 weeks of treatment, I feel completely refreshed and pain-free. Highly recommend this authentic center.',
      rating: 5,
      date: '2 weeks ago',
      verified: true
    },
    {
      id: 2,
      name: 'Meera K.',
      location: 'Ernakulam, Kerala',
      initial: 'M',
      avatarColor: 'bg-purple-500',
      review: 'Amazing experience with Panchakarma therapy. The staff is very professional and the treatments are authentic. My stress levels have reduced significantly. Thank you for the wonderful care!',
      rating: 5,
      date: '1 week ago',
      verified: true
    },
    {
      id: 3,
      name: 'Ravi M.',
      location: 'Thrissur, Kerala',
      initial: 'R',
      avatarColor: 'bg-green-500',
      review: 'Best Ayurvedic center in Kerala! Traditional treatments with modern facilities. Dr. Priya helped me with digestive issues that I had for years. Completely satisfied with the results.',
      rating: 5,
      date: '4 days ago',
      verified: true
    },
    {
      id: 4,
      name: 'Anjali S.',
      location: 'Calicut, Kerala',
      initial: 'A',
      avatarColor: 'bg-pink-500',
      review: 'Wonderful postnatal care program. The herbal treatments and massage therapy helped me recover quickly after delivery. Professional staff and clean environment. Highly recommended!',
      rating: 5,
      date: '3 weeks ago',
      verified: true
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
    <section id="doctors" className="py-24 bg-gradient-to-br from-blue-50 via-cyan-50/30 to-emerald-50 relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-[100px] -z-10 animate-blob mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-100/20 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000 mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          id="doctors-header"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${isVisible['doctors-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-800 text-sm font-bold mb-6 border border-blue-100 shadow-sm">
            <Star className="w-4 h-4" />
            Expert Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 tracking-tight">
            What Our Doctors Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Hear from our experienced Ayurvedic physicians about the transformative power of authentic treatments
          </p>
        </div>

        {/* Testimonials Grid - 1x3 Layout */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {doctorsTestimonials.map((doctor, index) => (
            <div
              key={doctor.id}
              id={`doctor-${doctor.id}`}
              data-animate
              className={`bg-gradient-to-b from-white to-blue-50/50 rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative border border-blue-100/50 group ${isVisible[`doctor-${doctor.id}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-all duration-300">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Doctor Photo & Info */}
              <div className="flex items-center mb-6 pt-4">
                <div className="relative">
                  <img
                    src={doctor.photo}
                    alt={doctor.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg ring-2 ring-blue-100"
                  />
                  {/* Experience Badge */}
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-[10px] px-2 py-1 rounded-full font-bold shadow-sm">
                    {doctor.experience}
                  </div>
                </div>
                <div className="ml-5 flex-1">
                  <h3 className="text-xl font-serif font-bold text-gray-900 leading-tight mb-1">{doctor.name}</h3>
                  <p className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-1">{doctor.designation}</p>
                  <p className="text-gray-400 text-xs font-medium">{doctor.specialization}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6 bg-yellow-50/50 w-fit px-3 py-1.5 rounded-full border border-yellow-100">
                <div className="flex gap-0.5">
                  {[...Array(doctor.rating)].map((_, index) => (
                    <Star key={index} className="w-3.5 h-3.5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-xs text-yellow-700 font-bold">
                  {doctor.rating}.0/5.0
                </span>
              </div>

              {/* Testimonial */}
              <blockquote className="text-gray-600 leading-relaxed italic text-sm font-light">
                "{doctor.testimonial}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Customer Reviews Section */}
        <div className="relative isolate py-12">
          {/* Blended background for this section */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen bg-gradient-to-b from-transparent via-red-50/60 to-transparent -z-20 blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-100/40 rounded-full blur-[120px] -z-10 mix-blend-multiply animate-pulse"></div>
          {/* Customer Reviews Header */}
          <div
            id="reviews-header"
            data-animate
            className={`text-center mb-12 pt-8 transition-all duration-1000 ${isVisible['reviews-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50/80 rounded-full text-red-700 text-sm font-bold mb-6 border border-red-100">
              <MapPin className="w-4 h-4" />
              Google Reviews
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 tracking-tight">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Real experiences from our valued patients on Google Maps
            </p>
          </div>

          {/* Customer Reviews Grid - 2x2 Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {customerReviews.map((review, index) => (
              <div
                key={review.id}
                id={`review-${review.id}`}
                data-animate
                className={`bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-white hover:border-red-200 hover:bg-white group ${isVisible[`review-${review.id}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Review Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 ${review.avatarColor} rounded-full flex items-center justify-center border-4 border-white shadow-md text-white font-bold text-lg`}>
                      {review.initial}
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-gray-900 text-base">{review.name}</h4>
                        {review.verified && (
                          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center" title="Verified Review">
                            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 font-medium">{review.location}</p>
                    </div>
                  </div>
                  <div className="flex bg-yellow-50 px-2 py-1 rounded-lg border border-yellow-100">
                    {[...Array(review.rating)].map((_, index) => (
                      <Star key={index} className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Review Content */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 font-light">
                  "{review.review}"
                </p>

                {/* Review Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400 font-medium">{review.date}</span>
                  <div className="flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/500px-Google_%22G%22_logo.svg.png" alt="Google" className="w-4 h-4" />
                    <span className="text-xs font-bold text-gray-600">Posted on Google</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Reviews CTA */}
          <div className="text-center pb-8">
            <a
              href="https://www.google.com/maps/place/Namaste+Ayurveda+Hospital/@11.3399245,76.2796351,17z/data=!4m8!3m7!1s0x3ba623c4707e4c0d:0x8f293f925f14bae3!8m2!3d11.3399245!4d76.2796351!9m1!1b1!16s%2Fg%2F11kr7vnrv3?entry=ttu#lrd=0x3ba623c4707e4c0d:0x8f293f925f14bae3,1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300 font-bold border-2 border-blue-100 hover:border-blue-200 shadow-lg hover:shadow-blue-100 group"
            >
              <MapPin className="w-5 h-5 mr-2 group-hover:text-red-500 transition-colors" />
              View All Reviews on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}