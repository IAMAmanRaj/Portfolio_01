import React, { useState } from 'react';
import { SocialLinks } from './SocialLinks';
import { PaymentModal } from '../../features/payment/components/PaymentModal';
import { usePayment } from '../../features/payment/hooks/usePayment';
import { SiBuymeacoffee } from "react-icons/si";
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const { amount, setAmount, isProcessing, initiatePayment } = usePayment();

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleProceed = () => {
    if (amount > 0) {
      setShowPaymentModal(false);
      initiatePayment();
      setAmount(''); // Reset amount after payment
    } else {
      alert("Please enter a valid amount.");
    }
  };

  return (
    <footer className="footer gap-6 sm:pt-8 relative z-[20] border-white footer-center p-10 pb-8 pt-2 md:pt-3 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <Link
          to="#"
          onClick={() => setShowPaymentModal(true)}
          className="transition-all font-mono duration-300 font-bold text-blue-600 hover:text-amber-700 text-xl cursor-pointer"
        >
          {isProcessing ? 'Caffeinating..' : <div className='flex flex-row gap-2 text-xl text-center items-center'>
                                  
                                  Buy me a <SiBuymeacoffee className="w-6 h-6 md:w-8 md:h-8 hover:rotate-12 transition-all duration-300" />
                                </div>}
        </Link>
      </nav>

      <SocialLinks />

      <div className="text-blue-100">
        <p className="font-bold font-mono">Portfolio @ Aman Raj </p>
        <div className="flex flex-row gap-1">
          <p className="text-pink-700 font-extrabold font-mono text-3xl opacity-80 hover:cursor-pointer transition-all duration-300 hover:opacity-100">{`👀❤️`}</p>
        </div>
        <p className="font-bold font-mono w-[120%]">Copyright © {new Date().getFullYear()} - Some rights reserved :)</p>
      </div>

      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        amount={amount}
        onAmountChange={handleAmountChange}
        onProceed={handleProceed}
        isProcessing={isProcessing}
      />
    </footer>
  );
};

export default Footer;