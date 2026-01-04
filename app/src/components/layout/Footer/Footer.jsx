import React, { useState } from 'react';
import { SocialLinks } from './SocialLinks';
import { PaymentModal } from '../../features/payment/components/PaymentModal';
import { usePayment } from '../../features/payment/hooks/usePayment';
import { FaCoffee } from 'react-icons/fa';

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
    <footer className="footer gap-6 pt-16 sm:pt-8 relative z-[20] border-white footer-center p-10 pb-8 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <a
          onClick={() => setShowPaymentModal(true)}
          className="link link-hover transition-all duration-300 font-bold text-blue-600 hover:text-amber-700 text-xl cursor-pointer"
        >
          {isProcessing ? 'Caffeinating..' : <div className='flex flex-row gap-2 text-xl text-center items-center'>
                                  
                                  Buy me a <FaCoffee className="w-6 h-6 md:w-8 md:h-8 hover:rotate-12 transition-all duration-300" />
                                </div>}
        </a>
      </nav>

      <SocialLinks />

      <div className="text-blue-100">
        <p>Portfolio @ Aman Raj | Copyright © {new Date().getFullYear()} - All rights reserved</p>
        <div className="flex flex-row gap-1">
          {`Made with`}
          <p className="text-pink-700 font-extrabold">{`<3`}</p>
        </div>
        <p className="font-normal">{`Feel free to reach out :)  `}</p>
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