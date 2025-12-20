import { Phone, Mail, MapPin, MessageCircle, Send, User, FileText, Facebook, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 9072 771661',
      link: 'tel:+919072771661',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      hoverColor: 'hover:bg-green-100'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: '+91 9747 716266',
      link: 'https://wa.me/919747716266?text=Hello, I would like to know more about your Ayurvedic treatments.',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      hoverColor: 'hover:bg-emerald-100'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      details: '@namaste.ayurveda_',
      link: 'https://www.instagram.com/namaste.ayurveda_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600',
      hoverColor: 'hover:bg-pink-100'
    },
    {
      icon: Facebook,
      title: 'Facebook',
      details: 'Namaste Ayurveda',
      link: 'https://www.facebook.com/profile.php?id=100094479222937',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-800',
      hoverColor: 'hover:bg-blue-100'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'namasteayurveda23@gmail.com',
      link: 'mailto:namasteayurveda23@gmail.com?subject=Inquiry about Ayurvedic Treatment',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      hoverColor: 'hover:bg-blue-100'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Mampoyil, Chungathara, Malappuram, Kerala',
      link: 'https://maps.app.goo.gl/9UFdgghh6kyGnadY9',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
      hoverColor: 'hover:bg-red-100'
    }
  ];

  const handleSubmit = () => {
    // Form submission logic will be implemented later
    console.log('Form submitted - functionality to be added');
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
    <section id="contact" className="relative py-24 bg-gradient-to-br from-green-50/50 via-amber-50/30 to-white scroll-mt-12 overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-100/20 rounded-full blur-[100px] -z-10 animate-blob mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-100/20 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000 mix-blend-multiply"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/40 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          id="contact-header"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${isVisible['contact-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-amber-50 rounded-full text-green-800 text-sm font-bold mb-6 border border-green-100 shadow-sm">
            <MessageCircle className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 tracking-tight">
            Contact & <span className="text-green-700">Enquiry</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Get in touch with us for personalized Ayurvedic consultations and treatments.
            We're here to guide you on your journey to natural wellness.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-20">
          {contactInfo.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a
                key={index}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : '_self'}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                id={`contact-card-${index}`}
                data-animate
                className={`relative overflow-hidden bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group border border-white/50 hover:border-${item.color}-200 ${isVisible[`contact-card-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 ${item.bgColor} rounded-full blur-2xl -mr-10 -mt-10 opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                <div className={`${item.iconColor} mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <IconComponent size={32} />
                </div>
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2 relative z-10">{item.title}</h3>
                <p className={`text-gray-600 font-medium ${item.title === 'Email Us' ? 'break-all text-xs' : 'text-sm'} ${item.title === 'Visit Us' ? 'text-xs leading-tight' : ''} relative z-10 group-hover:text-gray-900 transition-colors`}>
                  {item.details}
                </p>
              </a>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div
          id="contact-content"
          data-animate
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 transition-all duration-1000 ${isVisible['contact-content'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Google Map */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-200 to-amber-200 rounded-[2.2rem] blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-white">
              <div className="bg-gradient-to-r from-green-700 to-emerald-800 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                <h3 className="text-2xl font-serif font-bold text-white flex items-center relative z-10">
                  <MapPin className="mr-3 text-green-200" size={28} />
                  Find Us on Map
                </h3>
                <p className="text-green-100 mt-2 font-light relative z-10">
                  Located in the heart of Kerala's wellness destination
                </p>
              </div>
              <div className="h-[500px] w-full relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.123456789!2d75.7012939!3d10.8279107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba623c4707e4c0d%3A0x8f293f925f14bae3!2sNamaste%20Ayurveda%20Hospital!5e0!3m2!1sen!2sin!4v1749825997644!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Namaste Ayurveda Location"
                  className="filter grayscale group-hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-md rounded-[2rem] shadow-2xl border border-white/60 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-amber-400 to-green-400"></div>
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-green-50 p-3 rounded-2xl">
                  <Send className="text-green-600" size={28} />
                </div>
                <div>
                  <h3 className="text-3xl font-serif font-bold text-gray-900">Get In Touch</h3>
                  <p className="text-gray-500 text-sm">We'd love to hear from you</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 ml-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 text-gray-900 placeholder-gray-400 hover:bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 ml-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 text-gray-900 placeholder-gray-400 hover:bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone and Subject Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 ml-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 text-gray-900 placeholder-gray-400 hover:bg-white"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-bold text-gray-700 ml-1">
                      Treatment <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 text-gray-900 hover:bg-white appearance-none cursor-pointer"
                      >
                        <option value="">Select Treatment Type</option>
                        <option value="rejuvenation">Rejuvenation</option>
                        <option value="post-natal">Post-Natal Care</option>
                        <option value="cosmetology">Cosmetology</option>
                        <option value="hair">Hair Treatment</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 ml-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 text-gray-900 placeholder-gray-400 hover:bg-white resize-none"
                    placeholder="Tell us about your health concerns..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-700 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-green-700 hover:to-emerald-800 transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-green-200 flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-4">
                    We typically respond within 2-4 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div
          id="contact-info"
          data-animate
          className={`bg-white/60 backdrop-blur-md rounded-[2rem] shadow-lg border border-white/60 p-10 mb-16 transition-all duration-1000 ${isVisible['contact-info'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-serif font-bold text-gray-900">Why Choose Namaste Ayurveda?</h3>
            <div className="w-20 h-1 bg-green-200 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 hover:bg-white rounded-2xl transition-colors duration-300">
              <div className="text-green-600 text-4xl mb-4 transform hover:scale-110 transition-transform">🌿</div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">Authentic Treatments</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Traditional Ayurvedic practices passed down through generations</p>
            </div>
            <div className="text-center p-6 hover:bg-white rounded-2xl transition-colors duration-300">
              <div className="text-green-600 text-4xl mb-4 transform hover:scale-110 transition-transform">👨‍⚕️</div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">Expert Practitioners</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Certified Ayurvedic doctors with years of experience</p>
            </div>
            <div className="text-center p-6 hover:bg-white rounded-2xl transition-colors duration-300">
              <div className="text-green-600 text-4xl mb-4 transform hover:scale-110 transition-transform">🏥</div>
              <h4 className="font-bold text-gray-900 mb-2 text-lg">Personalized Care</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Customized treatment plans for your unique needs</p>
            </div>
          </div>
        </div>

        {/* Copyright Footer */}
        <div className="pt-8 border-t border-gray-200/60">
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} <span className="font-bold text-green-700">Namaste Ayurveda Hospital</span>. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2 font-medium">
              Authentic Ayurvedic Treatments • Mampoyil, Chungathara, Malappuram, Kerala
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}