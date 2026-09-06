import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-red-600 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-[1320px] w-full mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-7xl font-black mb-8 uppercase tracking-tighter leading-tight">
            Your Home Has Enough <br />
            <span className="text-blue-900">To-Do Lists.</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
            Let the professionals handle your routine maintenance so you can spend your time on what matters most.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <button className="w-full sm:w-auto bg-blue-900 hover:bg-blue-800 text-white px-12 py-6 rounded-full font-black text-2xl shadow-2xl transition-all uppercase tracking-widest flex items-center justify-center">
              Book Online
              <ArrowRight className="ml-3 w-8 h-8" />
            </button>
            <button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-blue-900 px-12 py-6 rounded-full font-black text-2xl shadow-xl transition-all uppercase tracking-widest">
              Request Service
            </button>
          </div>
          <p className="mt-10 text-white/70 font-bold uppercase tracking-widest text-sm">
            Trusted by 10,000+ Phoenix Households
          </p>
        </motion.div>
      </div>
    </section>
  );
}
