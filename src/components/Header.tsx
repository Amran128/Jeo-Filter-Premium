import { motion } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { IMAGES } from '../constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Autopilot', href: '#autopilot' },
    { name: 'Services', href: '#services' },
    { name: 'Property Management', href: '#property' },
    { name: 'Work Request', href: '#' },
    { name: 'Store', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-[1320px] w-full mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex-shrink-0">
          <img 
            src={IMAGES.LOGO} 
            alt="Joe Filter Logo" 
            className="h-14 md:h-16 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-700 hover:text-red-600 font-medium transition-colors text-sm"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <a href="tel:602-555-0123" className="flex items-center text-blue-900 font-bold hover:text-blue-700 transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            (602) 555-0123
          </a>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-red-200 transition-all uppercase tracking-wider text-sm">
            Book Online
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="xl:hidden p-2 text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="xl:hidden bg-white border-t border-gray-100 absolute top-full left-0 right-0 shadow-xl p-4"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-700 font-medium py-2 border-b border-gray-50 last:border-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col space-y-4">
              <button className="bg-red-600 text-white px-6 py-3 rounded-full font-bold uppercase tracking-wider text-center">
                Book Online
              </button>
              <button className="border-2 border-blue-900 text-blue-900 px-6 py-3 rounded-full font-bold uppercase tracking-wider text-center">
                Work Request
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
