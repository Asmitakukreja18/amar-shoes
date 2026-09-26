import React, { useState } from 'react';
import { ShoppingBag, Search, MapPin, Phone, Menu, X, Ruler, Sparkles, Home, Zap } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export default function Navbar({ cartCount, onOpenCart, onOpenSizeGuide, searchQuery, setSearchQuery, activeCategory, setActiveCategory }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 glass-header bg-white/95 border-b border-slate-200 shadow-sm">
      {/* Top Bar Announcement */}
      <div className="bg-gradient-to-r from-red-600 via-blue-600 to-amber-500 text-white text-[11px] sm:text-xs font-bold py-1 px-3 text-center tracking-wide flex items-center justify-center gap-1.5 shadow-sm">
        <Sparkles className="w-3.5 h-3.5 animate-bounce shrink-0" />
        <span className="truncate">Welcome to <strong>{STORE_INFO.name}</strong> • Chitra Chowk, Amravati</span>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-amber-400 p-0.5 bg-white shadow-md flex items-center justify-center shrink-0">
              <img 
                src="/assets/logo.jpg" 
                alt="Amar Shoe Stores Logo" 
                className="w-full h-full object-contain rounded-full logo-img-fix"
              />
            </div>
            <div>
              <span className="text-base sm:text-2xl font-black tracking-tight text-slate-900 block leading-none font-sans">
                AMAR <span className="text-red-600 font-extrabold">SHOE</span> STORES
              </span>
              <span className="text-[9px] sm:text-xs text-blue-700 font-bold tracking-wider uppercase flex items-center gap-0.5 mt-0.5">
                <MapPin className="w-3 h-3 text-red-600 shrink-0" /> Amravati Store
              </span>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search shoes, sneakers, boys shoes, juttis..."
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

          {/* Action Buttons - Desktop */}
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

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-1.5">
            <button
              onClick={onOpenCart}
              className="relative p-2 text-slate-700 bg-slate-100 rounded-xl border border-slate-200"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5 text-red-600" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-black rounded-full w-4 h-4 flex items-center justify-center shadow-md">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 bg-slate-100 rounded-xl border border-slate-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
            </button>
          </div>
        </div>

        {/* Mobile Input Bar */}
        <div className="md:hidden pb-2.5">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search shoes, sneakers, heels..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-100 border border-slate-300 rounded-xl pl-10 pr-8 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs bg-slate-200 rounded-full w-4 h-4 flex items-center justify-center font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Slide Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
          
          {/* Category Quick Links */}
          <div className="grid grid-cols-2 gap-2 pb-2">
            <button
              onClick={() => { setActiveCategory('all'); setMobileMenuOpen(false); }}
              className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-2"
            >
              <Home className="w-4 h-4 text-blue-600" />
              <span>All Footwear</span>
            </button>
            <button
              onClick={() => { setActiveCategory('boys'); setMobileMenuOpen(false); }}
              className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 flex items-center gap-2"
            >
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Boys Shoes</span>
            </button>
          </div>

          <button
            onClick={() => { onOpenSizeGuide(); setMobileMenuOpen(false); }}
            className="w-full text-left btn-secondary py-2.5 px-4 text-xs font-bold flex items-center gap-2"
          >
            <Ruler className="w-4 h-4 text-amber-600" />
            <span>Shoe Size Conversion Guide</span>
          </button>

          <a
            href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent("Hi Amar Shoe Stores! I am inquiring about shoes from your mobile website.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full btn-whatsapp py-2.5 px-4 text-xs font-bold flex items-center justify-center gap-2 text-center shadow-md"
          >
            <Phone className="w-4 h-4" />
            <span>Order on WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
