import { motion } from 'motion/react';
import { Award, ThumbsUp, Map, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../constants';

export default function WhyJoeFilter() {
  const stats = [
    { label: 'Valley-Wide Coverage', value: 'Phoenix Metro', icon: Map },
    { label: 'BBB Rating', value: 'A+ Accredited', icon: Award },
    { label: 'Positive Reviews', value: '1,070+', icon: ThumbsUp },
    { label: 'Years of Excellence', value: '15+', icon: CheckCircle2 }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1320px] w-full mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <img 
                src={IMAGES.TECH} 
                alt="Joe Filter Technician" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </motion.div>
            {/* Background elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-100 rounded-full -z-10" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-3xl -z-10 rotate-12" />
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-8 uppercase tracking-tight">
              Why Phoenix Trusts <br />
              <span className="text-red-600">Joe Filter.</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              We aren't just another service company. We're your neighbors, dedicated to making home ownership easier, healthier, and more affordable through proactive maintenance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg transition-all"
                >
                  <div className="bg-red-600 p-3 rounded-xl shadow-lg">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-blue-900 leading-tight">{stat.value}</div>
                    <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 flex items-center space-x-6">
              <div className="flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=64&h=64" 
                  alt="CrimShield Logo" 
                  className="w-16 h-16 rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-blue-900">CrimShield Certified</h4>
                <p className="text-gray-600 text-sm">Every Joe Filter technician undergoes rigorous background checks and continuous monitoring for your safety.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
