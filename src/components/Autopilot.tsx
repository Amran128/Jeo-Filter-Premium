import { motion } from 'motion/react';
import { Check, Calendar } from 'lucide-react';
import { AUTOPILOT_PLANS } from '../data';

export default function Autopilot() {
  return (
    <section id="autopilot" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 transform translate-x-1/2 -z-10" />
      
      <div className="max-w-[1320px] w-full mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black text-blue-900 mb-6 leading-tight uppercase tracking-tighter">
              Put Your Home On <br />
              <span className="text-red-600">Autopilot.</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Stop trying to remember when you last changed your filters or serviced your RO system. Our recurring plans ensure your home is always at peak performance.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-center space-x-3 text-blue-900 font-bold">
                <Check className="w-6 h-6 text-red-600" />
                <span>Automatic Schedule Tracking</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-900 font-bold">
                <Check className="w-6 h-6 text-red-600" />
                <span>Priority Emergency Service</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-900 font-bold">
                <Check className="w-6 h-6 text-red-600" />
                <span>Exclusive Member Discounts</span>
              </div>
            </div>
            <button className="bg-blue-900 hover:bg-blue-800 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl uppercase tracking-wider transition-all">
              See Autopilot Plans
            </button>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {AUTOPILOT_PLANS.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-3xl border-2 transition-all duration-300 ${
                  index === 1 
                    ? 'border-red-600 shadow-2xl bg-white relative' 
                    : 'border-gray-100 hover:border-blue-200 bg-gray-50/50'
                }`}
              >
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <Calendar className={`w-10 h-10 mb-4 ${index === 1 ? 'text-red-600' : 'text-blue-900'}`} />
                <h3 className="text-2xl font-black text-blue-900 mb-1">{plan.name}</h3>
                <p className="text-red-600 font-bold text-sm mb-4">{plan.frequency}</p>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-xs text-gray-700">
                      <Check className="w-3 h-3 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
