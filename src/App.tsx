import React from 'react';
import { 
  Plus, 
  Smartphone, 
  Globe, 
  ChevronRight, 
  Menu, 
  X,
  CreditCard,
  Zap,
  CheckCircle2,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 glass top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="bg-pharma-600 p-2 rounded-xl">
              <Plus className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-800">
              Quick<span className="text-pharma-600">Pharma</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-slate-600 hover:text-pharma-600 transition-colors font-medium">Services</a>
            <a href="#about" className="text-slate-600 hover:text-pharma-600 transition-colors font-medium">About</a>
            <a href="#collaborate" className="text-slate-600 hover:text-pharma-600 transition-colors font-medium">Collaborate</a>
            <button className="btn-primary">Connect with Us</button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              <a href="#services" className="block text-slate-600 font-medium py-2">Services</a>
              <a href="#about" className="block text-slate-600 font-medium py-2">About</a>
              <a href="#collaborate" className="block text-slate-600 font-medium py-2">Collaborate</a>
              <button className="w-full btn-primary">Connect with Us</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-pharma-100 text-pharma-700 px-4 py-1 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              <span>Building the Future of Digital Healthcare</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-950 leading-tight mb-6">
              Scalable & Reliable <span className="text-pharma-600">Digital Pharma</span> Solutions
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl">
              At Quick Pharma Services, we empower online pharmacy platforms with high-performance mobile apps and web ecosystems. Start your digital journey with experienced healthcare developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary group">
                Review Proposal
                <ChevronRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">Explore Capabilities</button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-pharma-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pharma-200 rounded-full blur-3xl opacity-50"></div>
            <div className="relative glass p-4 rounded-3xl overflow-hidden shadow-2xl shadow-pharma-100 transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="/hero-pharma.png" 
                alt="Pharma Dashboard" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: { icon: React.ElementType, title: string, description: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-pharma-50 transition-all group"
  >
    <div className="bg-pharma-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pharma-600 transition-colors">
      <Icon className="w-8 h-8 text-pharma-600 group-hover:text-white" />
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </motion.div>
);

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Specialized Tech Solutions</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We provide the infrastructure you need to launch a reliable digital pharmacy service that patients and professionals can trust.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Smartphone}
            title="Mobile App Development"
            description="Native and cross-platform apps designed for seamless prescription ordering and patient consultations."
            delay={0.1}
          />
          <FeatureCard 
            icon={Globe}
            title="Pharmacy Web Platforms"
            description="High-converting E-commerce websites optimized for healthcare regulations and user accessibility."
            delay={0.2}
          />
          <FeatureCard 
            icon={CreditCard}
            title="E-commerce Integration"
            description="Secure payment gateways, patient account management, and real-time inventory tracking systems."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

const Collaboration = () => {
  return (
    <section id="collaborate" className="py-24 bg-pharma-950 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-pharma-900 -skew-x-12 transform translate-x-1/2 opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Looking for Early-Phase <span className="text-pharma-400">Collaboration?</span>
            </h2>
            <p className="text-pharma-100 text-lg mb-10 leading-relaxed">
              We are particularly interested in collaborators who are open to working with efficient and flexible project budgets during this startup phase. Join us in building a scalable future.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-pharma-800 p-2 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-pharma-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Efficient Delivery</h4>
                  <p className="text-pharma-200/70">Optimized workflows to build faster without compromising quality.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-pharma-800 p-2 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-pharma-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl">Flexible Financing</h4>
                  <p className="text-pharma-200/70">Custom budget plans tailored for early-stage initiatives.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] text-slate-900 shadow-2xl shadow-black/50">
            <h3 className="text-3xl font-bold mb-6">Let's Explore Possibilities</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-pharma-600 outline-none" />
                <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-pharma-600 outline-none" />
              </div>
              <input type="text" placeholder="Project Type (e.g. Pharmacy App)" className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-pharma-600 outline-none" />
              <textarea placeholder="Tell us about your needs..." rows={4} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:ring-2 focus:ring-pharma-600 outline-none resize-none"></textarea>
              <button type="submit" className="w-full bg-pharma-600 text-white font-bold py-4 rounded-xl hover:bg-pharma-700 transition-colors shadow-lg shadow-pharma-600/20">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-50 py-20 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-pharma-600 p-2 rounded-xl">
              <Plus className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-800">
              Quick<span className="text-pharma-600">Pharma</span>
            </span>
          </div>
          <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
            Building the next generation of digital pharmacy infrastructure. We specialize in healthcare technology that scales.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-400 hover:text-pharma-600 cursor-pointer">
              <Globe className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-400 hover:text-pharma-600 cursor-pointer">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-6">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 text-slate-500">
              <Phone className="w-5 h-5 text-pharma-600" />
              <span>+1 (555) 234-5678</span>
            </li>
            <li className="flex gap-3 text-slate-500">
              <Mail className="w-5 h-5 text-pharma-600" />
              <span>hello@quickpharma.com</span>
            </li>
            <li className="flex gap-3 text-slate-500">
              <MapPin className="w-5 h-5 text-pharma-600" />
              <span>Digital Health Center, SC</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-6">Capabilities</h4>
          <ul className="space-y-4 text-slate-500">
            <li>Patient Portals</li>
            <li>Telemedicine Apps</li>
            <li>Regulatory Compliance</li>
            <li>API Development</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 mt-16 pt-8 text-center text-slate-400 text-sm">
        &copy; 2026 Quick Pharma Services. All rights reserved.
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Collaboration />
      </main>
      <Footer />
    </div>
  );
}

export default App;
