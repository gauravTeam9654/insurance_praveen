import React, { useState } from 'react';
import Icon from './Icon';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../src/firebase/config';
import emailjs from 'emailjs-com';
import ThankYouModal from './ThankYouModal';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Life Insurance',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 1. Store in Firebase
      await addDoc(collection(db, "enquiries"), {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'new'
      });

      // 2. Send Email Notification (replace placeholders with actual IDs)
      // Service ID, Template ID, Public Key
      // await emailjs.send(
      //   'YOUR_SERVICE_ID', 
      //   'YOUR_TEMPLATE_ID', 
      //   {
      //     from_name: formData.name,
      //     from_email: formData.email,
      //     message: formData.message,
      //     type: formData.type,
      //     phone: formData.phone
      //   }, 
      //   'YOUR_PUBLIC_KEY'
      // );

      console.log('Form submitted successfully');
      setShowModal(true); // Show the modal instead of alert
      setFormData({ name: '', email: '', phone: '', type: 'Life Insurance', message: '' });
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert('There was an error submitting your enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-8 text-slate-900">Get a Detailed Quote</h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                  placeholder="John Doe" 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                  placeholder="john@example.com" 
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                  placeholder="+1 (555) 000-0000" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Insurance Type</label>
                <select 
                  name="type"
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  <option>Life Insurance</option>
                  <option>Health Insurance</option>
                  <option>Vehicle Insurance</option>
                  <option>Business Insurance</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Additional Message</label>
              <textarea 
                rows={4} 
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed">
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
        
        <div className="lg:w-1/2 bg-blue-900 p-12 text-white">
          <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
          <p className="text-blue-200 mb-12">Visit us at our global headquarters or give us a call for immediate assistance.</p>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="bg-blue-800 p-4 rounded-2xl h-fit">
                <Icon name="MapPin" className="text-blue-300" />
              </div>
              <div>
                <h5 className="font-bold text-xl mb-1">Office Address</h5>
                <p className="text-blue-200 opacity-80">123 Financial District, Suite 500<br />New York, NY 10005, USA</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="bg-blue-800 p-4 rounded-2xl h-fit">
                <Icon name="Phone" className="text-blue-300" />
              </div>
              <div>
                <h5 className="font-bold text-xl mb-1">Phone Number</h5>
                <p className="text-blue-200 opacity-80">+1 (800) INSURE-PRO<br />+1 (212) 555-0123</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="bg-blue-800 p-4 rounded-2xl h-fit">
                <Icon name="Mail" className="text-blue-300" />
              </div>
              <div>
                <h5 className="font-bold text-xl mb-1">Email Inquiry</h5>
                <p className="text-blue-200 opacity-80">support@insurepro.com<br />claims@insurepro.com</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-blue-800">
            <h5 className="font-bold mb-4 uppercase tracking-widest text-xs opacity-60">Working Hours</h5>
            <div className="flex justify-between text-sm">
              <span>Mon - Fri</span>
              <span className="text-blue-300">09:00 AM - 06:00 PM</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span>Saturday</span>
              <span className="text-blue-300">10:00 AM - 02:00 PM</span>
            </div>
          </div>
        </div>
      </div>
      <ThankYouModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default ContactForm;
