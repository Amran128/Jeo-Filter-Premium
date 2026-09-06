import Header from './components/Header';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import Services from './components/Services';
import Autopilot from './components/Autopilot';
import PropertyManagement from './components/PropertyManagement';
import WhyJoeFilter from './components/WhyJoeFilter';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-red-100 selection:text-red-900">
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <Services />
        <Autopilot />
        <PropertyManagement />
        <WhyJoeFilter />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
