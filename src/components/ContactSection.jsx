import { Phone, Mail, MapPin, MessageCircle, Send, User, FileText, Facebook, Instagram} from 'lucide-react';

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

  return (
    <section id="contact" className="bg-gradient-to-br from-green-50 via-white to-amber-50 py-16 px-6 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact & <span className="text-green-600">Enquiry</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with us for personalized Ayurvedic consultations and treatments. 
            We're here to guide you on your journey to natural wellness.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-16">
          {contactInfo.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a
                key={index}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : '_self'}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className={`${item.bgColor} ${item.hoverColor} p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2 cursor-pointer group`}
              >
                <div className={`${item.iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className={`text-gray-700 font-medium ${item.title === 'Email Us' ? 'break-all text-sm' : ''} ${item.title === 'Visit Us' ? 'text-sm leading-tight' : ''}`}>
                  {item.details}
                </p>
              </a>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Google Map */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-6">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <MapPin className="mr-3" size={28} />
                Find Us on Map
              </h3>
              <p className="text-green-100 mt-2">
                Located in the heart of Kerala's wellness destination
              </p>
            </div>
            <div className="h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.123456789!2d75.7012939!3d10.8279107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba623c4707e4c0d%3A0x8f293f925f14bae3!2sNamaste%20Ayurveda%20Hospital!5e0!3m2!1sen!2sin!4v1749825997644!5m2!1sen!2sin"
                width="100%"
                height="191%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Namaste Ayurveda Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border-2 border-green-100 overflow-hidden">
            <div className="bg-white border-b-2 border-green-100 p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Send className="text-green-600" size={24} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 text-center">Get In Touch</h3>
              <p className="text-gray-600 text-center mt-2">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
            
            <div className="p-8">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-green-400 focus:ring-0 transition-colors duration-200 text-gray-900 placeholder-gray-400 hover:border-green-300"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-green-400 focus:ring-0 transition-colors duration-200 text-gray-900 placeholder-gray-400 hover:border-green-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone and Subject Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-green-400 focus:ring-0 transition-colors duration-200 text-gray-900 placeholder-gray-400 hover:border-green-300"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">
                    Treatment <span className="text-red-500">*</span>
                  </label>
                  <select
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-green-400 focus:ring-0 transition-colors duration-200 text-gray-900 hover:border-green-300 appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: 'right 0.75rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1.5em 1.5em'
                    }}
                  >
                    <option value="">Select Treatment Type</option>
                    <option value="rejuvenation">Rejuvenation</option>
                    <option value="post-natal">Post-Natal Care</option>
                    <option value="cosmetology">Cosmetology</option>
                    <option value="hair">Hair Treatment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2 mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-green-400 focus:ring-0 transition-colors duration-200 text-gray-900 placeholder-gray-400 hover:border-green-300 resize-none"
                  placeholder="Tell us about your health concerns or treatment preferences. We're here to help you on your wellness journey..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col items-center space-y-4">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full md:w-auto bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-green-700 focus:ring-4 focus:ring-green-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
                
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>We typically respond within 2-4 hours</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                <p className="text-xs text-green-700 text-center">
                  <span className="font-semibold">Privacy Protected:</span> Your information is secure and will never be shared with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Namaste Ayurveda?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-green-600 text-3xl mb-3">🌿</div>
              <h4 className="font-semibold text-gray-900 mb-2">Authentic Treatments</h4>
              <p className="text-gray-600 text-sm">Traditional Ayurvedic practices passed down through generations</p>
            </div>
            <div className="text-center p-4">
              <div className="text-green-600 text-3xl mb-3">👨‍⚕️</div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert Practitioners</h4>
              <p className="text-gray-600 text-sm">Certified Ayurvedic doctors with years of experience</p>
            </div>
            <div className="text-center p-4">
              <div className="text-green-600 text-3xl mb-3">🏥</div>
              <h4 className="font-semibold text-gray-900 mb-2">Personalized Care</h4>
              <p className="text-gray-600 text-sm">Customized treatment plans for your unique needs</p>
            </div>
          </div>
        </div>

        {/* Copyright Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} <span className="font-semibold text-green-600">Namaste Ayurveda Hospital</span>. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Authentic Ayurvedic Treatments • Mampoyil, Chungathara, Malappuram, Kerala
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}