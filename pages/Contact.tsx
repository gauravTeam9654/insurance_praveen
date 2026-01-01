import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Contact Us</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to our expert team for personalized insurance advice.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-8 rounded-full"></div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
