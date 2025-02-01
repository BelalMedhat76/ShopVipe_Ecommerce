'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Truck, Check } from 'lucide-react';

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-center mb-8">
        <div className="flex items-center">
          {/* Step 1 */}
          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? 'bg-black text-white' : 'bg-muted text-muted-foreground'}`}>
            1
          </div>
          <div className={`w-24 h-1 ${step >= 2 ? 'bg-black' : 'bg-muted'}`} />
          
          {/* Step 2 */}
          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? 'bg-black text-white' : 'bg-muted text-muted-foreground'}`}>
            2
          </div>
          <div className={`w-24 h-1 ${step >= 3 ? 'bg-black' : 'bg-muted'}`} />
          
          {/* Step 3 */}
          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 3 ? 'bg-black text-white' : 'bg-muted text-muted-foreground'}`}>
            3
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-card p-6 rounded-lg shadow-sm"
          >
            {step === 1 && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">First Name</label>
                    <input type="text" className="w-full px-4 py-2 rounded-md border bg-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Last Name</label>
                    <input type="text" className="w-full px-4 py-2 rounded-md border bg-background" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">Address</label>
                    <input type="text" className="w-full px-4 py-2 rounded-md border bg-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">City</label>
                    <input type="text" className="w-full px-4 py-2 rounded-md border bg-background" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Postal Code</label>
                    <input type="text" className="w-full px-4 py-2 rounded-md border bg-background" />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Payment Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Card Number</label>
                    <input type="text" className="w-full px-4 py-2 rounded-md border bg-background" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Expiry Date</label>
                      <input type="text" className="w-full px-4 py-2 rounded-md border bg-background" placeholder="MM/YY" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">CVV</label>
                      <input type="text" className="w-full px-4 py-2 rounded-md border bg-background" placeholder="123" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Name on Card</label>
                    <input type="text" className="w-full px-4 py-2 rounded-md border bg-background" />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4">
                  <Check size={32} />
                </div>
                <h2 className="text-2xl font-semibold mb-2">Order Confirmed!</h2>
                <p className="text-muted-foreground mb-6">
                  Thank you for your purchase. Your order will be shipped soon.
                </p>
                <p className="font-medium">Order #12345</p>
              </div>
            )}

            {step < 3 && (
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setStep(step + 1)}
                  className="px-6 py-3 bg-blue-700 text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
                >
                  {step === 1 ? 'Continue to Payment' : 'Confirm Order'}
                </button>
              </div>
            )}
          </motion.div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4 mb-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-muted-foreground">Quantity: {item.quantity}</p>
                    <p>${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
