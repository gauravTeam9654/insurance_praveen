import React from 'react';
import Icon from './Icon';

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-all animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl transform scale-100 transition-all animate-in zoom-in-95 duration-300 text-center relative overflow-hidden">
        
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

        <div className="relative z-10">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="CheckCircle" size={40} className="text-green-600" />
          </div>
          
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Thank You!</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Your enquiry has been successfully submitted. One of our expert agents will contact you shortly to discuss your insurance needs.
          </p>
          
          <button 
            onClick={onClose}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg transition-all active:scale-[0.98]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;
