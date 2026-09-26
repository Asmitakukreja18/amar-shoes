import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Phone, Mail, CheckCircle2, Tag } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  if (!isOpen) return null;

  const [coupon, setCoupon] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [orderSent, setOrderSent] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discountAmount = discountApplied ? Math.round(subtotal * 0.10) : 0;
  const deliveryFee = subtotal > 999 || subtotal === 0 ? 0 : 99;
  const grandTotal = subtotal - discountAmount + deliveryFee;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === 'AMAR10') {
      setDiscountApplied(true);
    } else {
      alert('Invalid coupon code. Try code: AMAR10 for 10% off!');
    }
  };

  const constructWhatsAppMessage = () => {
    let text = `🛒 *NEW FOOTWEAR ORDER - AMAR SHOE STORES*\n\n`;
    cartItems.forEach((item, index) => {
      text += `${index + 1}. *${item.name}*\n   - Size: UK/IND ${item.selectedSize}\n   - Quantity: ${item.quantity}\n   - Price: ₹${(item.price * item.quantity).toLocaleString('en-IN')}\n\n`;
    });
    if (discountApplied) text += `🎟️ Promo Discount (AMAR10): -₹${discountAmount}\n`;
    text += `🚚 Delivery: ${deliveryFee === 0 ? 'FREE Amravati Delivery' : `₹${deliveryFee}`}\n`;
    text += `💰 *TOTAL AMOUNT: ₹${grandTotal.toLocaleString('en-IN')}*\n\n`;
    text += `📍 Customer Location: Amravati\n`;
    text += `Please confirm my order!`;
    return encodeURIComponent(text);
  };

  const handleSendEmailOrder = (e) => {
    e.preventDefault();
    setOrderSent(true);

    const emailSubject = encodeURIComponent(`New Footwear Order from ${customerName} - Amar Shoe Stores`);
    let emailBody = `Customer Name: ${customerName}\nPhone: ${customerPhone}\nDelivery Address: ${customerAddress}\n\nORDERED ITEMS:\n`;
    cartItems.forEach((item, index) => {
      emailBody += `${index + 1}. ${item.name} | Size: UK/IND ${item.selectedSize} | Qty: ${item.quantity} | ₹${item.price * item.quantity}\n`;
    });
    emailBody += `\nSubtotal: ₹${subtotal}\nDiscount: -₹${discountAmount}\nTotal Amount: ₹${grandTotal}\n\nSent to: ${STORE_INFO.email}`;

    window.open(`mailto:${STORE_INFO.email}?subject=${emailSubject}&body=${encodeURIComponent(emailBody)}`);

    setTimeout(() => {
      setOrderSent(false);
      setEmailModalOpen(false);
      onClearCart();
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden modal-overlay">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-slate-200 text-slate-900 shadow-2xl flex flex-col justify-between">
          
          {/* Cart Header */}
          <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-red-50 text-red-600 border border-red-200">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-black tracking-tight text-slate-900 font-heading">
                  Your Shopping Cart
                </h2>
                <span className="text-xs text-slate-500 font-semibold">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} selected
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items Scrollable List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <h3 className="text-base font-bold text-slate-800">Your cart is empty</h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Browse our collection of sneakers, oxfords, heels, boys shoes and ethnic juttis.
                </p>
                <button
                  onClick={onClose}
                  className="btn-primary px-6 py-2.5 text-xs font-bold"
                >
                  Explore Footwear
                </button>
              </div>
            ) : (
              cartItems.map((item, idx) => (
                <div 
                  key={`${item.id}-${item.selectedSize}-${idx}`}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex gap-4 items-center shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-xl bg-white border border-slate-200"
                  />

                  <div className="flex-1 min-w-0 space-y-1">
                    <h4 className="text-xs font-bold text-slate-900 truncate">
                      {item.name}
                    </h4>
                    <div className="text-[11px] text-blue-700 font-semibold">
                      Size: UK/IND <span className="font-extrabold text-slate-900">{item.selectedSize}</span>
                    </div>
                    <div className="text-sm font-black text-slate-900">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </div>
                  </div>

                  {/* Quantity & Delete */}
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => onRemoveItem(item.id, item.selectedSize)}
                      className="text-slate-400 hover:text-red-600 transition-colors p-1"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-lg border border-slate-300 shadow-sm">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                        className="text-xs text-slate-600 hover:text-slate-900 font-bold"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold text-slate-900 w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                        className="text-xs text-slate-600 hover:text-slate-900 font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer / Checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-4">
              
              {/* Promo Code Input */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-600" />
                  <input
                    type="text"
                    placeholder="Coupon (e.g. AMAR10)"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 uppercase placeholder:normal-case placeholder-slate-400 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3.5 py-2 text-xs font-bold bg-white text-slate-900 hover:bg-slate-100 rounded-xl border border-slate-300 transition-all shadow-sm"
                >
                  Apply
                </button>
              </form>

              {discountApplied && (
                <div className="text-xs text-emerald-800 font-bold bg-emerald-50 p-2 rounded-lg border border-emerald-200 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Promo AMAR10 applied! Saved ₹{discountAmount}</span>
                </div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-slate-600 font-medium">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discountApplied && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Discount (10%)</span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery (Amravati City)</span>
                  <span className={deliveryFee === 0 ? 'text-amber-700 font-bold' : ''}>
                    {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-black text-slate-900 pt-2 border-t border-slate-200">
                  <span>Total Amount</span>
                  <span className="text-red-600 font-heading">₹{grandTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Direct Checkout Buttons */}
              <div className="space-y-2">
                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${constructWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full py-3 px-4 text-xs font-bold flex items-center justify-center gap-2 text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Checkout via WhatsApp</span>
                </a>

                <button
                  onClick={() => setEmailModalOpen(true)}
                  className="btn-secondary w-full py-3 px-4 text-xs font-bold flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-red-600" />
                  <span>Send Order to Store Email</span>
                </button>
              </div>

            </div>
          )}

        </div>
      </div>

      {/* Email Order Modal */}
      {emailModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay">
          <div className="bg-white border border-slate-200 p-6 rounded-3xl max-w-md w-full space-y-4 shadow-2xl">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Mail className="w-5 h-5 text-red-600" />
                <span>Send Email Order</span>
              </h3>
              <button onClick={() => setEmailModalOpen(false)} className="text-slate-400 hover:text-slate-700">✕</button>
            </div>

            {orderSent ? (
              <div className="text-center py-6 space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="text-base font-bold text-slate-900">Order Email Sent!</h4>
                <p className="text-xs text-slate-600">
                  Your order inquiry has been directed to <strong>{STORE_INFO.email}</strong>. Amar Shoe Stores team will contact you.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendEmailOrder} className="space-y-3">
                <div>
                  <label className="text-xs text-slate-700 block mb-1 font-bold">Your Full Name:</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Basantwani"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-700 block mb-1 font-bold">Phone Number:</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98230 12345"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-700 block mb-1 font-bold">Delivery Address in Amravati:</label>
                  <textarea
                    required
                    rows={2}
                    placeholder="House No, Landmark, Area, Amravati"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-red-500"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setEmailModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-primary px-5 py-2 text-xs font-bold"
                  >
                    Confirm & Send Email
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
