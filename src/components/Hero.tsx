import { motion } from 'motion/react';
import { Star, ArrowRight } from 'lucide-react';
import { IMAGES } from '../constants';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.HERO} 
          alt="Phoenix Modern Home" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent lg:to-white/10" />
      </div>

      <div className="max-w-[1320px] w-full mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 bg-blue-50 text-blue-900 px-4 py-2 rounded-full w-fit mb-6 shadow-sm border border-blue-100"
          >
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-bold">1,070+ Five-Star Reviews in Phoenix</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-blue-900 leading-tight mb-6"
          >
            Your Whole House <br />
            <span className="text-red-600">Needs Us.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-10 max-w-2xl"
          >
            Hands-off home maintenance for Phoenix homeowners and property managers. We handle the dirty work so you can enjoy your home.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-red-200 transition-all flex items-center justify-center uppercase tracking-wider">
              Book Online
              <ArrowRight className="ml-2 w-6 h-6" />
            </button>
            <button className="bg-white hover:bg-gray-50 text-blue-900 border-2 border-blue-900 px-10 py-5 rounded-full font-bold text-xl shadow-lg transition-all flex items-center justify-center uppercase tracking-wider">
              Work Request
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
