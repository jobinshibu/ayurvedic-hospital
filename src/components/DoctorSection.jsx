import { Quote, Star, MapPin } from 'lucide-react';

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

  return (
    <section id="doctors" className="py-16 bg-gradient-to-b from-blue-50 to-green-50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            Expert Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Doctors Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our experienced Ayurvedic physicians about the transformative power of authentic treatments
          </p>
        </div>

        {/* Testimonials Grid - 1x3 Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {doctorsTestimonials.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Doctor Photo & Info */}
              <div className="flex items-center mb-4 pt-2">
                <div className="relative">
                  <img
                    src={doctor.photo}
                    alt={doctor.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-gradient-to-r from-blue-400 to-green-400 shadow-md"
                  />
                  {/* Experience Badge */}
                  <div className="absolute -bottom-1 -right-1 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                    {doctor.experience}
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{doctor.name}</h3>
                  <p className="text-blue-600 font-medium text-sm">{doctor.designation}</p>
                  <p className="text-gray-500 text-xs">{doctor.specialization}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(doctor.rating)].map((_, index) => (
                  <Star key={index} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-sm text-gray-600 font-medium">
                  {doctor.rating}.0
                </span>
              </div>

              {/* Testimonial */}
              <blockquote className="text-gray-700 leading-relaxed italic">
                "{doctor.testimonial}"
              </blockquote>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-100 to-transparent rounded-tl-full opacity-50"></div>
            </div>
          ))}
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-20">
          {/* Customer Reviews Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-red-500 mr-2" />
              <span className="inline-block px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-medium">
                Google Reviews
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real experiences from our valued patients on Google Maps
            </p>
          </div>

          {/* Customer Reviews Grid - 2x2 Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {customerReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                {/* Review Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 ${review.avatarColor} rounded-full flex items-center justify-center border-2 border-gray-200`}>
                      <span className="text-white font-bold text-lg">{review.initial}</span>
                    </div>
                    <div className="ml-3">
                      <div className="flex items-center">
                        <h4 className="font-semibold text-gray-900 text-sm">{review.name}</h4>
                        {review.verified && (
                          <div className="ml-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">{review.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, index) => (
                        <Star key={index} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Review Content */}
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  {review.review}
                </p>

                {/* Review Footer */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{review.date}</span>
                  <div className="flex items-center">
                    <svg className="w-3 h-3 text-red-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-red-600 font-medium">Google</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Reviews CTA */}
          <div className="text-center mt-8">
            <a
              href="https://www.google.com/maps/place/Namaste+Ayurveda+Hospital/@11.3399245,76.2796351,17z/data=!4m8!3m7!1s0x3ba623c4707e4c0d:0x8f293f925f14bae3!8m2!3d11.3399245!4d76.2796351!9m1!1b1!16s%2Fg%2F11kr7vnrv3?entry=ttu#lrd=0x3ba623c4707e4c0d:0x8f293f925f14bae3,1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
            >
              <MapPin className="w-4 h-4 mr-2" />
              View All Reviews on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}