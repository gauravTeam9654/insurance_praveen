import React from 'react';
import { SERVICES } from '../constants';
import Icon from '../components/Icon';

const Services: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive insurance solutions designed to protect what matters most to you.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SERVICES.map((service) => (
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
                <p className="text-slate-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                   {/* Mock features for demonstration - in a real app these would come from the object */}
                  <li className="flex items-center gap-2 text-sm text-slate-500">
                    <Icon name="CheckCircle" size={14} className="text-green-500" /> 24/7 Support
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-500">
                    <Icon name="CheckCircle" size={14} className="text-green-500" /> Global Coverage
                  </li>
                  <li className="flex items-center gap-2 text-sm text-slate-500">
                    <Icon name="CheckCircle" size={14} className="text-green-500" /> Easy Claims
                  </li>
                </ul>
                <button className="w-full py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-all">
                  Get Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-3xl p-12 shadow-xl mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">How It Works</h2>
                <p className="text-slate-600">Get protected in 3 simple steps</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { step: '01', title: 'Choose Coverage', desc: 'Select the protection that fits your lifestyle.' },
                    { step: '02', title: 'Get Verified', desc: 'Quick online verification process.' },
                    { step: '03', title: 'You are Covered', desc: 'Receive your policy instantly.' }
                ].map((item, i) => (
                    <div key={i} className="text-center relative">
                        <div className="text-8xl font-black text-slate-100 absolute -top-10 left-1/2 -translate-x-1/2 -z-10 select-none">
                            {item.step}
                        </div>
                        <h3 className="text-xl font-bold mb-2 pt-8">{item.title}</h3>
                        <p className="text-slate-600">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Claims Process Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-blue-600 font-bold uppercase tracking-wider mb-2">Claims Process</h2>
               <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Hassle-Free Claims Experience</h3>
               <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  We know that filing a claim can be stressful. That's why we've redesigned the process to be as simple and compassionate as possible. Our AI-driven system handles the paperwork so you can focus on what matters.
               </p>
               
               <div className="space-y-6">
                  {[
                     { title: 'Report Instantly', desc: 'Log your claim via our app or website in minutes.' },
                     { title: 'AI Assessment', desc: 'Our smart algorithms assess damage and approve simple claims instantly.' },
                     { title: 'Fast Payout', desc: 'Approved funds are transferred directly to your bank account.' }
                  ].map((step, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="bg-blue-100 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-blue-600">
                           {i + 1}
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-900 mb-1">{step.title}</h4>
                           <p className="text-slate-600 text-sm">{step.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div className="relative">
               <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 opacity-10"></div>
               <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000" 
                  alt="Claims Process" 
                  className="rounded-3xl shadow-2xl relative z-10 w-full"
               />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
