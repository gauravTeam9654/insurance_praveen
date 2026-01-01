import React from 'react';
import Icon from '../components/Icon';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero Section of About Page */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            <div className="lg:w-1/2">
                <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    We Are <span className="text-blue-600">InsurePro</span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                    Dedicated to protecting your future since 1999. We believe in trust, transparency, and technology.
                </p>
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-4xl font-bold text-blue-600 mb-2">25+</h4>
                        <p className="text-slate-600">Years of Excellence</p>
                    </div>
                    <div>
                        <h4 className="text-4xl font-bold text-blue-600 mb-2">150k+</h4>
                        <p className="text-slate-600">Happy Clients</p>
                    </div>
                    <div>
                        <h4 className="text-4xl font-bold text-blue-600 mb-2">50+</h4>
                        <p className="text-slate-600">Countries Covered</p>
                    </div>
                    <div>
                        <h4 className="text-4xl font-bold text-blue-600 mb-2">98%</h4>
                        <p className="text-slate-600">Claims Paid</p>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1600" 
                  alt="Team Meeting" 
                  className="rounded-3xl shadow-2xl"
                />
            </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Icon name="ShieldCheck" className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                    To provide accessible, affordable, and comprehensive insurance solutions to everyone, everywhere. We aim to remove the complexity from insurance and replace it with confidence.
                </p>
            </div>
             <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Icon name="HeartPulse" className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                    A world where financial security is a standard, not a luxury. We strive to be the global leader in customer-centric insurance services, powered by human empathy and AI precision.
                </p>
            </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Leadership</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { name: 'David Smith', role: 'CEO & Founder', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800' },
                { name: 'Sarah Palmer', role: 'Chief Risk Officer', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800' },
                { name: 'James Wilson', role: 'Head of AI', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800' }
            ].map((leader, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl">
                    <img src={leader.img} alt={leader.name} className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                        <h4 className="text-white text-xl font-bold">{leader.name}</h4>
                        <p className="text-blue-300">{leader.role}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default About;
