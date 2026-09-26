import React, { useState } from 'react';
import { Star, Eye, ShoppingBag, Phone, Check } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export default function ProductCard({ product, onQuickView, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState(product.availableSizes[0]);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart({ ...product, selectedSize });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Amar Shoe Stores! I want to order "${product.name}" in Size: UK/IND ${selectedSize}. Price: ₹${product.price}. Please confirm availability at your Amravati store.`
  );

  return (
    <div className="product-card flex flex-col h-full group bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
      
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-slate-50 rounded-t-2xl p-2 sm:p-4 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
          {product.badge && (
            <span className="px-2 py-0.5 text-[9px] sm:text-[11px] font-black rounded-md bg-red-600 text-white shadow-md truncate max-w-[100px] sm:max-w-none">
              {product.badge}
            </span>
          )}
          <span className="px-2 py-0.5 text-[9px] sm:text-[11px] font-bold rounded-md bg-amber-500 text-slate-950 shadow-md w-fit">
            {product.discount}
          </span>
        </div>

        {/* Quick View Button Overlay */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute top-2 right-2 p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white/90 backdrop-blur-md text-slate-700 hover:text-white hover:bg-red-600 transition-all shadow-md border border-slate-200"
          title="Quick View Details"
        >
          <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>

        {/* Color Swatches */}
        <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-white/90 backdrop-blur-md px-1.5 py-0.5 rounded-full border border-slate-200 shadow-sm">
          {product.colors.map((color, idx) => (
            <span
              key={idx}
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-slate-300 shadow-sm"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Details Container */}
      <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-[10px] sm:text-xs text-slate-500 mb-1">
            <span className="uppercase tracking-wider font-extrabold text-blue-700 truncate max-w-[80px] sm:max-w-none">
              {product.category.replace('-', ' ')}
            </span>
            <div className="flex items-center gap-0.5 sm:gap-1 text-amber-500 font-bold shrink-0">
              <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onQuickView(product)}
            className="text-xs sm:text-base font-extrabold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-1 cursor-pointer leading-snug"
          >
            {product.name}
          </h3>

          {/* Description snippet - Desktop */}
          <p className="hidden sm:block text-xs text-slate-600 line-clamp-2 mt-1 font-normal">
            {product.description}
          </p>
        </div>

        {/* Size Selector Pills */}
        <div>
          <span className="text-[10px] sm:text-[11px] text-slate-500 block mb-1 font-bold">Size (UK):</span>
          <div className="flex flex-wrap gap-1">
            {product.availableSizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-1.5 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-md sm:rounded-lg font-bold transition-all ${
                  selectedSize === size
                    ? 'bg-red-600 text-white shadow-sm scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Price & Action Buttons */}
        <div className="pt-2 border-t border-slate-100 space-y-2">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-1 sm:gap-2">
              <span className="text-sm sm:text-xl font-black text-slate-900 font-heading">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 line-through font-semibold">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            <button
              onClick={handleAddToCart}
              className={`py-2 px-1.5 text-[10px] sm:text-xs font-bold rounded-lg sm:rounded-xl flex items-center justify-center gap-1 transition-all ${
                added 
                  ? 'bg-emerald-600 text-white' 
                  : 'btn-primary'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                  <span className="truncate">Add</span>
                </>
              )}
            </button>

            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp py-2 px-1.5 text-[10px] sm:text-xs font-bold rounded-lg sm:rounded-xl flex items-center justify-center gap-1"
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
              <span className="truncate">Order</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
