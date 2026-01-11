import { IoClose } from 'react-icons/io5';
import { FaCoffee } from 'react-icons/fa';
import { BiCoffeeTogo } from 'react-icons/bi';
import { motion, AnimatePresence } from 'framer-motion';

export const PaymentModal = ({ isOpen, onClose, amount, onAmountChange, onProceed, isProcessing }) => {
  const coffeeAmounts = [
    { amount: 50, cups: 1, label: '1 Coffee' },
    { amount: 150, cups: 3, label: '3 Coffees' },
    { amount: 250, cups: 5, label: '5 Coffees' }
  ];

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop with fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal Content with bounce */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 20,
              mass: 1,
              duration: 0.1
            }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none"
          >
            <div 
              className="relative w-full max-w-md pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div 
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  backgroundImage: `url('/images/thankyou.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: '1.5rem',
                }}
              >
                {/* Overlay for better readability - Coffee themed colors */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-950/90 via-orange-900/85 to-yellow-950/90" />
                
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full hover:bg-white/20 transition-all duration-200 group backdrop-blur-sm"
                  aria-label="Close modal"
                >
                  <IoClose className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-200" />
                </button>

                {/* Content */}
                <div className="relative z-10 px-8 py-4 md:py-10">
                  {/* Coffee Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="p-4 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full 
                                    shadow-lg shadow-yellow-600/50">
                        <FaCoffee className="w-8 h-8 text-white" />
                      </div>
                      {/* Steam effect */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-1">
                        <div className="w-1 h-3 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
                        <div className="w-1 h-4 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-1 h-3 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white text-center mb-2">
                    Buy Me a Coffee 🐻
                  </h3>
                  <p className="text-yellow-200 text-center mb-8 text-sm">
                    Support my work with a virtual coffee! Your support keeps me caffeinated and coding.
                  </p>

                  {/* Quick Coffee Selection */}
                  <div className="mb-6">
                    <p className="text-white/80 text-sm font-medium text-center mb-3">
                      Choose number of coffees:
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      {coffeeAmounts.map((coffee) => (
                        <button
                          key={coffee.amount}
                          onClick={() => onAmountChange({ target: { value: coffee.amount } })}
                          className={`
                            px-3 py-4 rounded-xl transition-all duration-200
                            border-2 flex flex-col items-center gap-2
                            ${amount == coffee.amount 
                              ? 'bg-yellow-600/30 border-yellow-500 shadow-lg shadow-yellow-500/30' 
                              : 'bg-white/5 border-white/20 hover:bg-white/10 hover:border-yellow-600/50'
                            }
                          `}
                        >
                          <BiCoffeeTogo className="w-6 h-6 text-yellow-400" />
                          <span className="text-white text-xs font-semibold">{coffee.label}</span>
                          <span className="text-yellow-300 text-sm font-bold">₹{coffee.amount}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Amount Input */}
                  <div className="mb-8">
                    <label className="block text-white text-sm font-medium mb-2 text-center">
                      Or enter a custom amount ( INR )
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <span className="text-yellow-400 text-lg font-bold">₹</span>
                      </div>
                      <input
                        type="number"
                        value={amount}
                        onChange={onAmountChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border-2 border-yellow-600/30 
                                 rounded-xl text-white placeholder-yellow-300/50 
                                 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500
                                 transition-all duration-200"
                        placeholder="Enter amount"
                        required
                        min="1"
                      />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={onClose}
                      disabled={isProcessing}
                      className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold 
                               rounded-xl transition-all duration-200 backdrop-blur-sm
                               border-2 border-white/20 hover:border-white/30
                               disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={onProceed}
                      disabled={isProcessing || !amount || amount <= 0}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 
                               hover:from-yellow-700 hover:to-orange-700 text-white font-semibold 
                               rounded-xl transition-all duration-200 shadow-lg shadow-yellow-600/30
                               hover:shadow-yellow-600/50 hover:scale-[1.02]
                               disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                               flex items-center justify-center gap-2"
                    >
                      {isProcessing ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <>
                          <FaCoffee className="w-4 h-4" />
                          Buy Coffee
                        </>
                      )}
                    </button>
                  </div>

                  {/* Info text */}
                  <p className="text-yellow-200/60 text-sm md:text-lg text-center mt-4">
                    Every coffee helps me stay motivated! 💛
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};