import { IMAGES } from '../constants';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="max-w-[1320px] w-full mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <img 
              src={IMAGES.LOGO} 
              alt="Joe Filter Logo" 
              className="h-16 w-auto" 
              referrerPolicy="no-referrer"
            />
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Premium HVAC maintenance and home services for Phoenix. Whole-house care delivered with professional precision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest mb-8 text-sm">Our Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-red-500 transition-colors">Air Filter Replacement</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">RO & Water Filtration</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Air Duct Cleaning</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Dryer Vent Cleaning</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Smoke Detector Service</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Water Softener Salt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest mb-8 text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-red-500 transition-colors">Autopilot Plans</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Property Management</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Work Request</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Online Store</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Blog & Resources</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest mb-8 text-sm">Get In Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-red-600 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white font-bold mb-1">Call Us Anytime</p>
                  <p>(602) 555-0123</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-red-600 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white font-bold mb-1">Email Us</p>
                  <p>service@joefilter.com</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-red-600 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white font-bold mb-1">Service Area</p>
                  <p>Phoenix, Scottsdale, Tempe, Chandler, Mesa & Gilbert</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} Joe Filter. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
