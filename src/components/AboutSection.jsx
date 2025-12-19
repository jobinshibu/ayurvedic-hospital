import { Heart, Users, Leaf } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { number: '500+', label: 'Patients Treated', icon: Users },
    { number: '10+', label: 'Expert Therapists', icon: Heart },
    { number: '50+', label: 'Herbal Treatments', icon: Leaf }
  ];

  const values = [
    {
      title: 'Authentic Tradition',
      description: 'We follow ancient Ayurvedic principles passed down through generations, ensuring authentic and effective treatments.',
      icon: '🕉️'
    },
    {
      title: 'Personalized Care',
      description: 'Every treatment plan is customized based on individual constitution, health condition, and wellness goals.',
      icon: '🤲'
    },
    {
      title: 'Natural Healing',
      description: 'Using only pure, organic herbs and traditional methods to promote natural healing and wellness.',
      icon: '🌿'
    },
    {
      title: 'Holistic Approach',
      description: 'We treat not just symptoms but focus on complete wellness of body, mind, and spirit.',
      icon: '☯️'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-green-50 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            About Namaste Ayurveda
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Healing Through Ancient Wisdom
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ayurveda Through Namaste. Uncover The Magic Of Nature
          </p>
        </div>

        {/* Our Story */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Namaste Ayurveda was born from a deep reverence for traditional healing wisdom and a passion for 
              bringing authentic Ayurvedic care to modern wellness seekers. Inspired by the timeless teachings 
              of ancient practitioners and guided by our commitment to natural healing, we have created a sanctuary 
              where traditional knowledge meets contemporary wellness needs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From our serene location in Kerala, we offer not just treatments but a complete transformation 
              experience that nurtures your body, calms your mind, and elevates your spirit through the sacred 
              art of Ayurveda.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content - Vision */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                To be the leading center for authentic Ayurvedic healing, where ancient wisdom transforms 
                modern lives. We envision a world where natural healing is accessible to all, creating 
                a global community of wellness that honors traditional practices while embracing innovation.
              </p>
              <p>
                Our vision extends beyond treatment – we aim to educate, inspire, and empower individuals 
                to embrace holistic living, making Ayurveda a cornerstone of preventive healthcare and 
                sustainable wellness for generations to come.
              </p>
            </div>

            {/* Vision Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700 font-medium">Global Wellness</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700 font-medium">Innovation in Tradition</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700 font-medium">Preventive Healthcare</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700 font-medium">Sustainable Living</span>
              </div>
            </div>
          </div>

          {/* Right Content - Vision Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center text-blue-600">
                <div className="text-center">
                  <div className="text-8xl mb-4">🌟</div>
                  <p className="text-lg font-medium">Vision Image Here</p>
                  <p className="text-sm opacity-75">Transformation & Future</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-200 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content - Mission Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-emerald-200 rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center text-green-600">
                <div className="text-center">
                  <div className="text-8xl mb-4">🕉️</div>
                  <p className="text-lg font-medium">Mission Image Here</p>
                  <p className="text-sm opacity-75">Traditional Practice</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-200 rounded-full opacity-20"></div>
          </div>

          {/* Right Content - Mission */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">🕉️</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                To provide authentic, personalized Ayurvedic treatments that restore balance and promote 
                natural healing. We are dedicated to preserving traditional knowledge while making it 
                accessible through compassionate care, expert guidance, and pure, organic remedies.
              </p>
              <p>
                Our mission is to serve as your trusted partner in wellness, offering specialized treatments 
                including Panchakarma, postnatal care, rejuvenation therapies, and comprehensive wellness 
                programs that address the root cause of imbalances rather than just symptoms.
              </p>
            </div>

            {/* Mission Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700 font-medium">Certified Practitioners</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700 font-medium">Organic Medicines</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700 font-medium">Traditional Methods</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700 font-medium">Personalized Care</span>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics - Centered */}
        <div className="flex justify-center mb-20">
          <div className="grid grid-cols-3 gap-8 md:gap-20">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide our practice and define our commitment to your wellness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}