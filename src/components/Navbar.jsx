import React, { useState } from 'react';
import { ShoppingBag, Search, MapPin, Phone, Menu, X, Ruler, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export default function Navbar({ cartCount, onOpenCart, onOpenSizeGuide, searchQuery, setSearchQuery, activeCategory, setActiveCategory }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 glass-header bg-white/95 border-b border-slate-200 shadow-sm">
      {/* Top Bar Announcement */}
      <div className="bg-gradient-to-r from-red-600 via-blue-600 to-amber-500 text-white text-xs font-bold py-1.5 px-4 text-center tracking-wide flex items-center justify-center gap-2 shadow-sm">
        <Sparkles className="w-3.5 h-3.5 animate-bounce" />
        <span>Welcome to <strong>{STORE_INFO.name}</strong> • Chitra Chowk, Amravati • Free Delivery in Amravati City!</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-amber-400 p-0.5 bg-white shadow-md hover:scale-105 transition-transform flex items-center justify-center shrink-0" style={{ width: '56px', height: '56px' }}>
              <img 
                src="/assets/logo.jpg" 
                alt="Amar Shoe Stores Logo" 
                className="w-full h-full object-contain rounded-full logo-img-fix"
                style={{ width: '52px', height: '52px', objectFit: 'contain' }}
              />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 block leading-tight font-sans">
                AMAR <span className="text-red-600 font-extrabold">SHOE</span> STORES
              </span>
              <span className="text-[10px] sm:text-xs text-blue-700 font-bold tracking-wider uppercase flex items-center gap-1">
                <MapPin className="w-3 h-3 text-red-600" /> Amravati Store
              </span>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search shoes, sneakers, school shoes, juttis..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-100 border border-slate-300 rounded-xl pl-10 pr-8 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all shadow-inner"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-xs bg-slate-200 rounded-full w-4 h-4 flex items-center justify-center font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenSizeGuide}
              className="btn-secondary px-3.5 py-2 text-xs flex items-center gap-1.5"
              title="Footwear Size Conversion Chart"
            >
              <Ruler className="w-4 h-4 text-amber-600" />
              <span>Size Guide</span>
            </button>

            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent("Hi Amar Shoe Stores! I am inquiring about shoes from your website.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp px-4 py-2 text-xs flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp Store</span>
            </a>

            <button
              onClick={onOpenCart}
              className="relative btn-primary px-4 py-2 text-xs flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>My Cart</span>
              {cartCount > 0 && (
                <span className="bg-amber-400 text-slate-950 text-[11px] font-black rounded-full w-5 h-5 flex items-center justify-center shadow-md animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Cart & Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenCart}
              className="relative p-2 text-slate-700 bg-slate-100 rounded-lg border border-slate-200"
            >
              <ShoppingBag className="w-5 h-5 text-red-600" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 bg-slate-100 rounded-lg border border-slate-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search shoes, sneakers, heels..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-100 border border-slate-300 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500"
            />
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-lg">
          <button
            onClick={() => { onOpenSizeGuide(); setMobileMenuOpen(false); }}
            className="w-full text-left btn-secondary py-2.5 px-4 text-sm flex items-center gap-2"
          >
            <Ruler className="w-4 h-4 text-amber-600" />
            <span>Shoe Size Conversion Guide</span>
          </button>

          <a
            href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent("Hi Amar Shoe Stores! I am inquiring about shoes from your website.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full btn-whatsapp py-2.5 px-4 text-sm flex items-center justify-center gap-2 text-center"
          >
            <Phone className="w-4 h-4" />
            <span>Order on WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
