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
    <div className="product-card flex flex-col h-full group bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
      
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-slate-50 rounded-t-2xl p-4 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span className="px-2.5 py-1 text-[11px] font-extrabold rounded-lg bg-red-600 text-white shadow-md">
              {product.badge}
            </span>
          )}
          <span className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-amber-500 text-slate-950 shadow-md">
            {product.discount}
          </span>
        </div>

        {/* Quick View Button Overlay */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute top-3 right-3 p-2 rounded-xl bg-white/90 backdrop-blur-md text-slate-700 hover:text-white hover:bg-red-600 transition-all shadow-md border border-slate-200"
          title="Quick View Details"
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Color Swatches */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-2 py-1 rounded-full border border-slate-200 shadow-sm">
          {product.colors.map((color, idx) => (
            <span
              key={idx}
              className="w-3 h-3 rounded-full border border-slate-300 shadow-sm"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Details Container */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
            <span className="uppercase tracking-wider font-bold text-blue-700">
              {product.category.replace('-', ' ')}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-slate-400 text-[10px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onQuickView(product)}
            className="text-base font-extrabold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-1 cursor-pointer"
          >
            {product.name}
          </h3>

          {/* Description snippet */}
          <p className="text-xs text-slate-600 line-clamp-2 mt-1 font-normal">
            {product.description}
          </p>
        </div>

        {/* Size Selector Pills */}
        <div>
          <span className="text-[11px] text-slate-500 block mb-1.5 font-bold">Select Size (UK/IND):</span>
          <div className="flex flex-wrap gap-1.5">
            {product.availableSizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-2.5 py-1 text-xs rounded-lg font-bold transition-all ${
                  selectedSize === size
                    ? 'bg-red-600 text-white shadow-md scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Price & Action Buttons */}
        <div className="pt-3 border-t border-slate-100 space-y-3">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black text-slate-900 font-heading">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-slate-400 line-through font-semibold">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            </div>
            <span className="text-[10px] text-emerald-700 font-bold uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              In Stock
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleAddToCart}
              className={`py-2.5 px-3 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all ${
                added 
                  ? 'bg-emerald-600 text-white' 
                  : 'btn-primary'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>

            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp py-2.5 px-3 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
