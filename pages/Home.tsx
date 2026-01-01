import React from 'react';
import { SERVICES, TESTIMONIALS } from '../constants';
import Icon from '../components/Icon';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-hero">
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            Secure Your Future with <span className="text-blue-400">Trusted</span> Insurance Solutions
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
            Experience peace of mind with our enterprise-grade coverage. 
            Reliable, affordable, and tailored to your specific lifestyle.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl hover:-translate-y-1">
              Get Free Quote
            </Link>
            <Link to="/contact" className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-full text-lg font-bold transition-all">
              Contact an Agent
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-1 h-12 bg-gradient-to-b from-blue-400 to-transparent rounded-full mx-auto" />
        </div>
      </section>

      {/* Services Preview Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-2">Our Coverage</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Comprehensive Insurance Services</h3>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {SERVICES.slice(0, 3).map((service) => (
              <div 
                key={service.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                    <Icon name={service.icon as any} className="text-blue-600" />
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-slate-600 mb-6 line-clamp-2">
                    {service.description}
                  </p>
                  <Link to="/services" className="flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700">
                    Learn More <Icon name="ChevronRight" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
             <Link to="/services" className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-bold transition-all">
                View All Services
             </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
                  alt="About Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-2xl shadow-2xl hidden md:block">
                <div className="text-4xl font-bold mb-1">25+</div>
                <div className="text-sm font-medium opacity-80 uppercase tracking-widest">Years Experience</div>
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full -z-0 opacity-50 blur-3xl"></div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-2">About InsurePro</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                More Than Just Insurance, We Protect Your Legacy
              </h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Since 1999, we've dedicated ourselves to providing tailored insurance solutions 
                for families and businesses. Our approach combines traditional values with 
                cutting-edge AI technology for faster claims and better coverage.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: 'Clock', title: '24/7 Support', desc: 'Always here when you need us' },
                  { icon: 'Award', title: 'Certified Agents', desc: 'Expert advice you can trust' },
                  { icon: 'CheckCircle', title: 'Fast Claims', desc: 'Processing in under 24h' },
                  { icon: 'ShieldCheck', title: 'Global Reach', desc: 'Coverage across 50+ countries' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="bg-blue-100 p-2 h-fit rounded-lg">
                      <Icon name={item.icon as any} className="text-blue-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900">{item.title}</h5>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link to="/about" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg active:scale-95 inline-block">
                Explore Our History
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: '150k+', label: 'Policies Issued' },
              { val: '98%', label: 'Claim Payouts' },
              { val: '12', label: 'Global Offices' },
              { val: '4.9/5', label: 'Client Rating' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.val}</div>
                <div className="text-blue-300 font-medium uppercase tracking-widest text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-2">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">The InsurePro Difference</h3>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { icon: 'ShieldCheck', title: 'Unmatched Security', desc: 'Rated A++ for financial stability and security.' },
               { icon: 'Zap', title: 'Lightning Fast Claims', desc: 'AI-powered processing settles 80% of claims in 24h.' },
               { icon: 'Users', title: 'Human-First Support', desc: 'Real experts available 24/7 to help you.' },
               { icon: 'Globe', title: 'Global Coverage', desc: 'Protection that travels with you, anywhere.' }
             ].map((item, i) => (
               <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-100">
                  <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                    <Icon name={item.icon as any} className="text-blue-600" size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/3">
                 <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-2">FAQ</h2>
                 <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
                 <p className="text-slate-600 mb-8">Can't find what you're looking for? Contact our support team for personalized assistance.</p>
                 <Link to="/contact" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition-all inline-block">
                    Contact Support
                 </Link>
              </div>
              <div className="lg:w-2/3">
                 <div className="space-y-6">
                    {[
                      { q: "How long does it take to get a policy?", a: "Most of our life and health insurance policies can be approved within 24-48 hours. Auto and rental insurance can be instant." },
                      { q: "How do I file a claim?", a: "You can file a claim instantly through our mobile app, website portal, or by calling our 24/7 claims hotline. Our AI system begins processing immediately." },
                      { q: "Can I customize my coverage?", a: "Absolutely. We believe in tailored solutions. You can adjust your coverage limits, add riders, and modify terms to fit your specific needs." },
                      { q: "Where are you located?", a: "We have headquarters in New York and regional offices in London, Singapore, and Sydney, but we operate digitally worldwide." }
                    ].map((item, i) => (
                      <div key={i} className="bg-slate-50 p-6 rounded-2xl">
                         <h5 className="font-bold text-slate-900 mb-2 text-lg">{item.q}</h5>
                         <p className="text-slate-600">{item.a}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-2">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Trusted by Thousands</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className={i < t.rating ? 'text-orange-400 fill-orange-400' : 'text-slate-300'} />
                  ))}
                </div>
                <p className="text-slate-600 italic mb-8 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white shadow-md" />
                  <div>
                    <h5 className="font-bold text-slate-900">{t.name}</h5>
                    <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section Preview */}
       <section id="contact" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
           <ContactForm />
        </div>
       </section>
    </>
  );
};

export default Home;
