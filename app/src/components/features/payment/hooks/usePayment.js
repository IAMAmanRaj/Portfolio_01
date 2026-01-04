import { useState } from 'react';

const URL = import.meta.env.VITE_SERVER_URL;
const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID;

export const usePayment = () => {
  const [amount, setAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const validateAmount = (value) => {
    const numValue = Number(value);
    if (isNaN(numValue) || numValue <= 0) {
      setError('Please enter a valid amount greater than 0');
      return false;
    }
    setError(null);
    return true;
  };

  const createOrder = async (paymentAmount) => {
    try {
      const response = await fetch(`${URL}/payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: paymentAmount * 100,
          currency: 'INR',
          receipt: `receipt_${Date.now()}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      return await response.json();
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const validatePayment = async (paymentData) => {
    try {
      const response = await fetch(`${URL}/validatePayment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      if (!response.ok) {
        throw new Error('Payment validation failed');
      }

      return await response.json();
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const initiatePayment = async () => {
    if (!validateAmount(amount)) return;

    setIsProcessing(true);
    setError(null);

    try {
      const order = await createOrder(Number(amount));

      const options = {
        key: RAZORPAY_KEY,
        amount: Number(amount) * 100,
        currency: 'INR',
        name: 'Support Aman Raj',
        description: 'Portfolio Support',
        order_id: order.id,
        handler: async (response) => {
          try {
            const result = await validatePayment(response);
            console.log('Payment successful:', result);
            setAmount('');
            alert('Thank you for your support! 🎉');
          } catch (err) {
            alert('Payment validation failed. Please contact support.');
          }
        },
        prefill: {
          name: '',
          email: '',
          contact: '',
        },
        theme: {
          color: '#3B82F6',
        },
        modal: {
          ondismiss: () => {
            setIsProcessing(false);
          },
        },
      };

      if (typeof window.Razorpay === 'undefined') {
        throw new Error('Razorpay SDK not loaded');
      }

      const razorpay = new window.Razorpay(options);
      
      razorpay.on('payment.failed', (response) => {
        console.error('Payment failed:', response.error);
        alert('Payment failed. Please try again.');
        setIsProcessing(false);
      });

      razorpay.open();
    } catch (err) {
      console.error('Payment initiation error:', err);
      setError('Failed to initiate payment. Please try again.');
      setIsProcessing(false);
    }
  };

  return {
    amount,
    setAmount,
    isProcessing,
    error,
    initiatePayment,
  };
};