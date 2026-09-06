import { Shield, Clock, Smile, MapPin } from 'lucide-react';

const trustItems = [
  {
    icon: Shield,
    title: 'CrimShield Certified',
    description: 'Background checked technicians you can trust in your home.'
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Service that fits your busy life, not the other way around.'
  },
  {
    icon: Smile,
    title: 'Complete Convenience',
    description: 'One provider for all your routine home maintenance needs.'
  },
  {
    icon: MapPin,
    title: 'Valley-Wide Service',
    description: 'Proudly serving the entire Phoenix metropolitan area.'
  }
];

export default function TrustSection() {
  return (
    <section className="py-12 bg-blue-900 text-white">
      <div className="max-w-[1320px] w-full mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                <item.icon className="w-8 h-8 text-red-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
