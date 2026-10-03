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
      
      {/* Image Container with Hover Flip */}
      <div 
        onClick={() => onQuickView(product)}
        className="relative aspect-square overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100/90 rounded-t-2xl p-2 sm:p-4 flex items-center justify-center cursor-pointer"
      >
        {/* Primary Image */}
        <img
          src={product.images && product.images.length > 0 ? product.images[0] : product.image}
          alt={product.name}
          className={`w-full h-full object-contain drop-shadow-md transition-all duration-500 ${
            product.images && product.images.length > 1 ? 'group-hover:opacity-0 group-hover:scale-90' : 'group-hover:scale-105'
          }`}
        />

        {/* Secondary Angle on Hover */}
        {product.images && product.images.length > 1 && (
          <img
            src={product.images[1]}
            alt={`${product.name} top view`}
            className="absolute inset-0 w-full h-full object-contain p-2 sm:p-4 drop-shadow-lg opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        )}

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10 pointer-events-none">
          {product.badge && (
            <span className="px-2 py-0.5 text-[9px] sm:text-[11px] font-black rounded-md bg-red-600 text-white shadow-md truncate max-w-[120px] sm:max-w-none">
              {product.badge}
            </span>
          )}
          <span className="px-2 py-0.5 text-[9px] sm:text-[11px] font-bold rounded-md bg-amber-500 text-slate-950 shadow-md w-fit">
            {product.discount}
          </span>
        </div>

        {/* View Angles Hint Pill */}
        {product.images && product.images.length > 1 && (
          <span className="absolute bottom-2 right-2 text-[9px] font-bold text-slate-600 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded-md border border-slate-200/80 shadow-xs hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
            2 Angles
          </span>
        )}

        {/* Quick View Button Overlay */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          className="absolute top-2 right-2 p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white/90 backdrop-blur-md text-slate-700 hover:text-white hover:bg-red-600 transition-all shadow-md border border-slate-200"
          title="Quick View Details"
        >
          <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>

        {/* Color Swatches */}
        <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-white/90 backdrop-blur-md px-1.5 py-0.5 rounded-full border border-slate-200 shadow-sm pointer-events-none">
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

          {/* Quick Highlight Feature Pill */}
          {product.highlights && product.highlights.length > 0 && (
            <div className="mt-2 flex items-center gap-1.5 text-[10px] text-emerald-800 bg-emerald-50/90 border border-emerald-200/60 px-2 py-1 rounded-md font-semibold truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
              <span className="truncate">{product.highlights[0]}</span>
            </div>
          )}
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
