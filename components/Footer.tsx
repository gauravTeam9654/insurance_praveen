import React from 'react';
import Icon from './Icon';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
      <footer className="bg-slate-900 text-slate-400 py-20 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Icon name="ShieldCheck" className="text-white" />
                </div>
                <span className="text-2xl font-bold text-white">
                  Insure<span className="text-blue-500">Pro</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                Protecting futures since 1999. We provide world-class insurance 
                solutions for every stage of life. Trusted by over 150,000 clients globally.
              </p>
              <div className="flex gap-4">
                {['Briefcase', 'HeartPulse', 'Car', 'Home'].map((social, i) => (
                  <button key={i} className="bg-slate-800 hover:bg-blue-600 p-3 rounded-xl text-white transition-all shadow-md">
                    <Icon name={social as any} size={18} />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="text-white font-bold mb-6">Quick Links</h5>
              <ul className="space-y-4 text-sm">
                {[
                    { name: 'Home', path: '/' },
                    { name: 'About Us', path: '/about' },
                    { name: 'Our Services', path: '/services' },
                    { name: 'Contact', path: '/contact' }
                ].map(link => (
                  <li key={link.name}><Link to={link.path} className="hover:text-blue-500 transition-colors">{link.name}</Link></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-bold mb-6">Insurance</h5>
              <ul className="space-y-4 text-sm">
                {['Life Insurance', 'Health Insurance', 'Vehicle Insurance', 'Business Insurance', 'Home Insurance', 'Travel Insurance'].map(link => (
                  <li key={link}><a href="#" className="hover:text-blue-500 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-bold mb-6">Newsletter</h5>
              <p className="text-sm mb-6">Stay updated with the latest insurance tips and company news.</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter email" 
                  className="w-full bg-slate-800 border-none rounded-xl py-4 pl-4 pr-14 text-sm focus:ring-2 focus:ring-blue-600"
                />
                <button className="absolute right-2 top-2 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <Icon name="Send" size={18} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center text-xs opacity-60 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2024 InsurePro Global Services. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
