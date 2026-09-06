import { motion } from 'motion/react';
import { MousePointerClick, Truck, HeartPulse } from 'lucide-react';

const steps = [
  {
    icon: MousePointerClick,
    title: 'Book Online',
    description: 'Select your services and choose a time that works for you in under 60 seconds.'
  },
  {
    icon: Truck,
    title: 'We Handle Everything',
    description: 'Our expert technicians arrive with the right parts and skills to get the job done right.'
  },
  {
    icon: HeartPulse,
    title: 'Enjoy Your Home',
    description: 'Breathe easier and live better with a home that is professionally maintained.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-[1320px] w-full mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-4 uppercase tracking-tight">How It Works</h2>
          <div className="w-24 h-2 bg-red-600 mx-auto rounded-full" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 w-2/3 h-1 bg-gray-200 -translate-y-1/2 z-0 mx-auto" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-gray-50 mb-8 relative">
                  <div className="absolute -top-2 -left-2 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">
                    {index + 1}
                  </div>
                  <step.icon className="w-10 h-10 text-blue-900" />
                </div>
                <h3 className="text-2xl font-black text-blue-900 mb-4 uppercase tracking-wide">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-col items-center"
        >
          <button className="bg-red-600 hover:bg-red-700 text-white px-12 py-5 rounded-full font-black text-xl shadow-2xl transition-all uppercase tracking-widest flex items-center group">
            Get Started Now
            <MousePointerClick className="ml-3 w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
