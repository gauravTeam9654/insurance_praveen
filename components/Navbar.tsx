
import React, { useState, useEffect } from 'react';
import Icon from './Icon';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  
  // Dynamic styles for the navbar
  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
    isScrolled 
      ? 'bg-white/80 backdrop-blur-md border-slate-200 py-4 shadow-sm' 
      : isHome 
        ? 'bg-transparent border-transparent py-6' 
        : 'bg-white/80 backdrop-blur-md border-slate-200 py-4 shadow-sm'
  }`;

  const linkClasses = (path: string) => `text-sm font-semibold transition-all duration-300 hover:text-blue-600 relative group ${
    (isScrolled || !isHome || isMobileMenuOpen) ? 'text-slate-700' : 'text-white/90 hover:text-white'
  } ${location.pathname === path ? 'text-blue-600' : ''}`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsMobileMenuOpen(false)}>
          <div className={`p-2 rounded-xl transition-all duration-300 ${isScrolled || !isHome ? 'bg-blue-600 text-white' : 'bg-white/20 backdrop-blur-sm text-white'}`}>
            <Icon name="ShieldCheck" size={24} />
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled || !isHome ? 'text-slate-900' : 'text-white'}`}>
            Insure<span className="text-blue-500">Pro</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {[
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' }
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={linkClasses(item.path)}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full ${location.pathname === item.path ? 'w-full' : ''}`}></span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
           <Link to="/contact" className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-lg hover:-translate-y-0.5 active:translate-y-0 ${
             isScrolled || !isHome 
              ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200' 
              : 'bg-white text-blue-900 hover:bg-blue-50'
           }`}>
             Get a Quote
           </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Icon 
            name={isMobileMenuOpen ? 'X' : 'Menu'} 
            className={isScrolled || !isHome || isMobileMenuOpen ? 'text-slate-900' : 'text-white'} 
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl md:hidden transition-all duration-300 origin-top overflow-hidden ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
         <div className="flex flex-col p-6 space-y-4">
            {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-lg font-medium text-slate-600 hover:text-blue-600 py-2 border-b border-slate-50 last:border-0 ${location.pathname === item.path ? 'text-blue-600' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="mt-4 w-full text-center bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Quote
            </Link>
         </div>
      </div>
    </nav>
  );
};

export default Navbar;
