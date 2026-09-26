import React, { useState } from 'react';
import { X, Star, ShoppingBag, Phone, Check, ShieldCheck, Truck, RotateCcw, Ruler } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export default function ProductModal({ product, onClose, onAddToCart, onOpenSizeGuide }) {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState(product.availableSizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart({ ...product, selectedSize, selectedColor, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Amar Shoe Stores! I am interested in ordering:
• Product: ${product.name}
• Size: UK/IND ${selectedSize}
• Quantity: ${quantity}
• Total Price: ₹${(product.price * quantity).toLocaleString('en-IN')}

Please confirm availability at your Amravati store.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-100 text-slate-700 hover:text-white hover:bg-red-600 transition-all shadow-md border border-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Image Gallery Column */}
          <div className="relative bg-slate-50 p-6 flex items-center justify-center min-h-[320px] border-b md:border-b-0 md:border-r border-slate-200">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-h-[420px] object-contain rounded-2xl drop-shadow-xl"
            />

            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="px-3 py-1 text-xs font-extrabold rounded-lg bg-red-600 text-white shadow-md">
                {product.discount}
              </span>
              {product.badge && (
                <span className="px-3 py-1 text-xs font-extrabold rounded-lg bg-amber-500 text-slate-950 shadow-md">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Details Column */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-6 bg-white">
            
            <div className="space-y-4">
              {/* Category & Rating */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  {product.category.replace('-', ' ')}
                </span>
                <div className="flex items-center gap-1.5 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200 text-amber-700 font-bold text-xs">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{product.rating}</span>
                  <span className="text-slate-500 font-normal">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Title & Price */}
              <div>
                <h2 className="text-2xl font-black text-slate-900 leading-tight">
                  {product.name}
                </h2>
                <div className="flex items-baseline gap-3 mt-2">
                  <span className="text-3xl font-black text-slate-900 font-heading">
                    ₹{(product.price * quantity).toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm text-slate-400 line-through font-semibold">
                    ₹{(product.originalPrice * quantity).toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-red-600 font-bold">
                    Save ₹{((product.originalPrice - product.price) * quantity).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                {product.description}
              </p>

              {/* Highlights List */}
              {product.highlights && (
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">Key Highlights:</span>
                  <ul className="space-y-1 text-xs text-slate-600 font-medium">
                    {product.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Size Selector */}
              <div className="pt-2 border-t border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Select Size (UK/IND):</span>
                  <button
                    onClick={onOpenSizeGuide}
                    className="text-xs text-amber-600 hover:underline flex items-center gap-1 font-bold"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>Size Chart</span>
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.availableSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-sm rounded-xl font-bold transition-all ${
                        selectedSize === size
                          ? 'bg-red-600 text-white shadow-lg scale-105 ring-2 ring-red-400'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      UK {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">Quantity:</span>
                <div className="flex items-center gap-3 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-slate-700 hover:text-slate-950 font-bold text-base px-1"
                  >
                    -
                  </button>
                  <span className="text-sm font-extrabold text-slate-900 w-6 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-slate-700 hover:text-slate-950 font-bold text-base px-1"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handleAddToCart}
                  className={`py-3.5 px-4 text-sm font-bold rounded-xl flex items-center justify-center gap-2 transition-all ${
                    added ? 'bg-emerald-600 text-white' : 'btn-primary'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Added to Cart</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp py-3.5 px-4 text-sm font-bold rounded-xl flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>

              {/* Store Guarantee Bar */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-[10px] text-slate-500 font-semibold text-center">
                <div className="flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  <span>100% Genuine</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-blue-700" />
                  <span>Amravati Pickup/Delivery</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <RotateCcw className="w-3.5 h-3.5 text-red-600" />
                  <span>Easy Exchange</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
