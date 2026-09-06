import { Building2, ShieldCheck, ClipboardCheck, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function PropertyManagement() {
  return (
    <section id="property" className="py-24 bg-blue-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-[1320px] w-full mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6"
            >
              <Building2 className="w-5 h-5 text-red-400" />
              <span className="text-sm font-bold uppercase tracking-wider">Enterprise Solutions</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">Property Management</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Simplify maintenance across your entire portfolio. We protect your assets, satisfy your tenants, and give you back your time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: 'Protect Assets',
                description: 'Regular HVAC and RO maintenance prevents costly repairs and extends the life of property equipment.'
              },
              {
                icon: ClipboardCheck,
                title: 'Simplify Logistics',
                description: 'Detailed service reports for every unit. No more hunting down maintenance records or tenant complaints.'
              },
              {
                icon: Users,
                title: 'Tenant Satisfaction',
                description: 'Happy tenants stay longer. Give them the gift of clean air, pure water, and professional service.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all group"
              >
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform shadow-xl">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-blue-100 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16 text-center"
          >
            <button className="bg-white text-blue-900 hover:bg-blue-50 px-12 py-5 rounded-full font-black text-xl shadow-2xl transition-all uppercase tracking-widest">
              Manage My Properties
            </button>
            <p className="mt-6 text-blue-300 font-medium">Trusted by over 150+ Property Management Firms in Arizona</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
