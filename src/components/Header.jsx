import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#treatments', label: 'Treatments' },
    { href: '/#doctors', label: 'Doctors' },
    // { href: '/our-plans', label: 'Our Plans' },
    { href: '/#gallery', label: 'Gallery' },
    { href: '/#contact', label: 'Contact' }
  ];

  return (
    <header className="relative z-50 bg-white/95 backdrop-blur-sm shadow-sm sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
              <img
                src="/logo.jpg"
                alt="Namaste Ayurveda Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Namaste Ayurveda</h1>
              <p className="text-sm text-green-600">In Memory of Sri. P V George Master</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href.startsWith('/#') ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 transition-colors font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-gray-700 hover:text-green-600 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
            <a
              href="tel:+919072771661"
              className="flex items-center space-x-1 hover:text-green-600 transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>+91 9072 771661</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                item.href.startsWith('/#') ? (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-green-600 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-gray-700 hover:text-green-600 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <div className="pt-3 border-t border-gray-200">
                <a
                  href="tel:+919072771661"
                  className="flex items-center space-x-2 text-sm text-gray-600 hover:text-green-600 transition-colors cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 9072 771661</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}