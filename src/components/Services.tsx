import { motion } from 'motion/react';
import { Wind, Droplets, Refrigerator, FlameKindling, Airplay, BellRing, Waves, Lightbulb, ChevronRight } from 'lucide-react';
import { SERVICES } from '../data';

const IconMap: any = {
  Wind,
  Droplets,
  Refrigerator,
  FlameKindling,
  Airplay,
  BellRing,
  Waves,
  Lightbulb
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-[1320px] w-full mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-4 uppercase tracking-tight">Our Premium Services</h2>
          <div className="w-24 h-2 bg-red-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive maintenance solutions designed to keep your home healthy, efficient, and safe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = IconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md p-2 rounded-xl">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="p-8 flex-grow">
                  <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button className="flex items-center text-red-600 font-bold uppercase tracking-wider text-sm hover:translate-x-2 transition-transform">
                    Learn More
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
