import { Service, Plan, Testimonial, FAQ } from './types';
import airFilterImg from './assets/images/service_air_filter_1788706879387.jpg';
import fridgeFilterImg from './assets/images/service_fridge_filter_1788706898890.jpg';
import dryerVentImg from './assets/images/service_dryer_vent_1788706915431.jpg';
import smokeDetectorImg from './assets/images/service_smoke_detector_1788706929707.jpg';

export const SERVICES: Service[] = [
  {
    id: 'air-filter',
    title: 'Air Filter Replacement',
    description: 'Ensure clean air and HVAC efficiency with regular, precision filter changes.',
    icon: 'Wind',
    image: airFilterImg
  },
  {
    id: 'ro-water',
    title: 'RO & Water Filtration',
    description: 'Pure, delicious water at your fingertips. We maintain your systems so you don’t have to.',
    icon: 'Droplets',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fridge-filter',
    title: 'Refrigerator Filters',
    description: 'Fresh ice and water starts with a clean filter. Automatic replacements on your schedule.',
    icon: 'Refrigerator',
    image: fridgeFilterImg
  },
  {
    id: 'dryer-vent',
    title: 'Dryer Vent Cleaning',
    description: 'Prevent fire hazards and reduce drying time with professional vent maintenance.',
    icon: 'FlameKindling',
    image: dryerVentImg
  },
  {
    id: 'air-duct',
    title: 'Air Duct Cleaning',
    description: 'Breathe deeper. Remove dust, allergens, and debris from your home’s air channels.',
    icon: 'Airplay',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'smoke-detector',
    title: 'Smoke Detector Maintenance',
    description: 'Safety first. We test detectors and replace batteries to protect your family.',
    icon: 'BellRing',
    image: smokeDetectorImg
  },
  {
    id: 'water-salt',
    title: 'Water Softener Salt Delivery',
    description: 'Never run out of salt again. Heavy lifting handled by our pros.',
    icon: 'Waves',
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'light-bulb',
    title: 'Light Bulb Replacement',
    description: 'Hard-to-reach bulbs? No problem. We’ll keep your home bright and efficient.',
    icon: 'Lightbulb',
    image: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=800'
  }
];

export const AUTOPILOT_PLANS: Plan[] = [
  {
    id: 'monthly',
    name: 'Monthly Care',
    frequency: 'Every 30 Days',
    description: 'Ideal for high-use homes and pet owners.',
    features: ['Monthly filter check', 'Safety inspection', 'Priority scheduling']
  },
  {
    id: 'bi-monthly',
    name: 'Bi-Monthly',
    frequency: 'Every 60 Days',
    description: 'Our most popular plan for typical households.',
    features: ['Regular maintenance', 'System optimization', 'Discounts on repairs']
  },
  {
    id: 'quarterly',
    name: 'Quarterly',
    frequency: 'Every 90 Days',
    description: 'The standard for reliable preventative care.',
    features: ['Seasonal prep', 'Filter replacements', 'Expert advice']
  },
  {
    id: 'custom',
    name: 'Custom Autopilot',
    frequency: 'Flexible Timing',
    description: 'Tailored specifically for unique property needs.',
    features: ['Property manager portal', 'Custom checklist', 'Dedicated support']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Homeowner in Arcadia',
    content: 'Joe Filter is a lifesaver. I never have to worry about my AC filters or smoke detectors anymore. They are always on time and professional.',
    rating: 5
  },
  {
    id: '2',
    name: 'Mark Thompson',
    role: 'Property Manager',
    content: 'The Autopilot program has saved me countless hours and prevented major HVAC repairs across my portfolio. Highly recommend for property managers.',
    rating: 5
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Homeowner in Scottsdale',
    content: 'Clean air, clean water, and one less thing on my to-do list. The RO maintenance service is top-notch.',
    rating: 5
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: 'How often should I change my air filters?',
    answer: 'For most Phoenix homes, we recommend changing standard 1-inch filters every 30 days, especially during summer months or if you have pets. High-efficiency media filters may last up to 6 months.'
  },
  {
    id: 'faq-2',
    question: 'What is included in the Autopilot plan?',
    answer: 'Our Autopilot plans include automatic, scheduled visits for air filter replacement, smoke detector battery checks, water filter changes, and general system inspections. You also get priority scheduling and member discounts.'
  },
  {
    id: 'faq-3',
    question: 'Do I need to be home for the service?',
    answer: 'While many customers prefer to be home, it is not strictly required. Our CrimShield certified technicians can access your home via lockbox or keypad if authorized, ensuring your maintenance is completed without disrupting your day.'
  },
  {
    id: 'faq-4',
    question: 'Why should I clean my dryer vent?',
    answer: 'Clogged dryer vents restrict airflow, forcing your dryer to work harder (costing more in energy) and significantly increasing the risk of a house fire. We recommend professional cleaning at least once a year.'
  },
  {
    id: 'faq-5',
    question: 'Can you service multiple properties for property managers?',
    answer: 'Absolutely. We offer dedicated property management accounts with streamlined billing, detailed reporting, and customized maintenance schedules across your entire portfolio.'
  }
];
