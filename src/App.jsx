import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import SizeGuideModal from './components/SizeGuideModal';
import StoreInfo from './components/StoreInfo';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import { PRODUCTS, CATEGORIES, STORE_INFO } from './data/products';
import { Filter, SlidersHorizontal, Sparkles, Phone, Zap, Home, ShoppingBag } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  
  // Modals & Drawers
  const [cartOpen, setCartOpen] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [selectedProductModal, setSelectedProductModal] = useState(null);

  // Cart State
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const handleAddToCart = (productWithSelection) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.id === productWithSelection.id && item.selectedSize === productWithSelection.selectedSize
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += (productWithSelection.quantity || 1);
        return updated;
      }
      return [...prev, { ...productWithSelection, quantity: productWithSelection.quantity || 1 }];
    });
  };

  // Update quantity in cart
  const handleUpdateCartQuantity = (id, size, newQty) => {
    if (newQty <= 0) {
      handleRemoveCartItem(id, size);
      return;
    }
    setCartItems(prev => prev.map(item => {
      if (item.id === id && item.selectedSize === size) {
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  // Remove single item
  const handleRemoveCartItem = (id, size) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.selectedSize === size)));
  };

  // Clear cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const matchesSearch = searchQuery.trim() === '' || 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [activeCategory, searchQuery, sortBy]);

  const totalCartCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const scrollToCatalog = (category = 'all') => {
    setActiveCategory(category);
    const el = document.getElementById('catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-100 flex flex-col font-sans selection:bg-red-600 selection:text-white pb-16 lg:pb-0">
      
      {/* Header Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenSizeGuide={() => setSizeGuideOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* Hero Banner Section */}
        <Hero onExploreClick={() => scrollToCatalog('all')} />

        {/* Featured Collections Launch Banner Cards */}
        <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 -mt-6 mb-8 sm:mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* CTR All-Terrain Banner */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-950/70 via-slate-900 to-slate-950 border border-amber-500/30 p-5 sm:p-7 flex flex-col justify-between shadow-2xl group">
              <div className="space-y-2 z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
                  <Zap className="w-3 h-3 text-amber-400" />
                  <span>New In Store • Chitra Chowk</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white font-heading leading-tight">
                  CTR All-Terrain & Trekking Series
                </h3>
                <p className="text-xs text-gray-300 font-light line-clamp-2">
                  Heavy-duty high ankle tactical boots, olive green trail runners & chunky camel desert trekkers with deep mountain lug soles.
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between z-10">
                <button
                  onClick={() => scrollToCatalog('outdoor-boots')}
                  className="btn-primary px-5 py-2.5 text-xs font-bold flex items-center gap-2 shadow-lg shadow-red-900/40"
                >
                  <span>Shop Outdoor Boots</span>
                  <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                </button>
                <span className="text-[11px] text-amber-400 font-bold bg-amber-950/60 px-2.5 py-1 rounded-lg border border-amber-500/30">
                  From ₹1,399
                </span>
              </div>
              <div className="absolute top-0 right-0 w-60 h-60 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            </div>

            {/* Slim-Fit Memory Foam Banner */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950/70 via-slate-900 to-slate-950 border border-blue-500/30 p-5 sm:p-7 flex flex-col justify-between shadow-2xl group">
              <div className="space-y-2 z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[11px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>Pehno Shaan Se • Authentic</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white font-heading leading-tight">
                  Slim-Fit Memory Foam Runners
                </h3>
                <p className="text-xs text-gray-300 font-light line-clamp-2">
                  Featherlight athletic sneakers with orthopedic memory foam insoles, breathable honeycomb mesh & responsive cushioning.
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between z-10">
                <button
                  onClick={() => scrollToCatalog('sneakers')}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg shadow-blue-900/40 transition-all"
                >
                  <span>Explore Slim-Fit Sports</span>
                  <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                </button>
                <span className="text-[11px] text-blue-400 font-bold bg-blue-950/60 px-2.5 py-1 rounded-lg border border-blue-500/30">
                  Instant Comfort
                </span>
              </div>
              <div className="absolute top-0 right-0 w-60 h-60 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            </div>

          </div>
        </section>

        {/* Footwear Catalog Section */}
        <section id="catalog" className="py-4 sm:py-8 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-8 border-b border-slate-800 pb-4 sm:pb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Amar Shoe Collection</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-heading">
                {activeCategory === 'boys' ? "Boys Special Footwear Collection" : "Explore Our Footwear Catalog"}
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Showing {filteredProducts.length} premium styles available at Chitra Chowk, Amravati
              </p>
            </div>

            {/* Sorting Dropdown */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xs text-gray-400 font-semibold flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
                Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-900 border border-slate-700/80 text-xs text-white rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2 font-medium focus:outline-none focus:border-red-500"
              >
                <option value="featured">Featured / Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated (Stars)</option>
              </select>
            </div>
          </div>

          {/* Category Filter Badges */}
          <div className="flex items-center gap-2 mb-6 sm:mb-8 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs rounded-xl font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-red-600 via-blue-600 to-amber-500 text-white shadow-lg shadow-red-600/20 scale-105'
                    : 'bg-slate-900 border border-slate-800 text-gray-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Product Cards Grid: 2 columns on mobile, 4 columns on desktop! */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800 space-y-4">
              <Filter className="w-12 h-12 text-gray-500 mx-auto" />
              <h3 className="text-lg font-bold text-white">No footwear matches your search</h3>
              <p className="text-xs text-gray-400 max-w-sm mx-auto">
                Try searching for another keyword like "Boys Sneaker", "School Shoe", or clear your category filter.
              </p>
              <button
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                className="btn-primary px-6 py-2 text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={(p) => setSelectedProductModal(p)}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          )}

        </section>

        {/* Amravati Store Location & Info */}
        <StoreInfo />

        {/* Customer Reviews & Testimonials */}
        <Testimonials />

        {/* Contact & Email Inquiry Section */}
        <ContactSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Slide Drawers */}
      <ProductModal
        product={selectedProductModal}
        onClose={() => setSelectedProductModal(null)}
        onAddToCart={handleAddToCart}
        onOpenSizeGuide={() => setSizeGuideOpen(true)}
      />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      <SizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
      />

      {/* Floating WhatsApp Desktop Button */}
      <a
        href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent("Hi Amar Shoe Stores, Amravati! I am inquiring about footwear from your website.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:flex fixed bottom-6 right-6 z-40 p-4 rounded-full btn-whatsapp shadow-2xl items-center justify-center group hover:scale-110 transition-transform"
        title="Chat with Amar Shoe Stores on WhatsApp"
      >
        <Phone className="w-6 h-6 animate-pulse" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-xs font-extrabold whitespace-nowrap pl-0 group-hover:pl-2">
          Chat on WhatsApp
        </span>
      </a>

      {/* Mobile Sticky Bottom Navigation Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 flex items-center justify-around shadow-2xl">
        <button
          onClick={() => { setActiveCategory('all'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex flex-col items-center gap-0.5 text-slate-600 hover:text-red-600"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold">Home</span>
        </button>

        <button
          onClick={() => scrollToCatalog('boys')}
          className="flex flex-col items-center gap-0.5 text-slate-600 hover:text-blue-700"
        >
          <Zap className="w-5 h-5 text-amber-500" />
          <span className="text-[10px] font-bold">Boys Shoes</span>
        </button>

        <button
          onClick={() => setCartOpen(true)}
          className="relative flex flex-col items-center gap-0.5 text-slate-600 hover:text-red-600"
        >
          <ShoppingBag className="w-5 h-5 text-red-600" />
          <span className="text-[10px] font-bold">Cart</span>
          {totalCartCount > 0 && (
            <span className="absolute -top-1 right-2 bg-red-600 text-white text-[9px] font-black rounded-full w-4 h-4 flex items-center justify-center">
              {totalCartCount}
            </span>
          )}
        </button>

        <a
          href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent("Hi Amar Shoe Stores! I am inquiring about shoes from your mobile website.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 text-emerald-600 font-bold"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>
      </div>

    </div>
  );
}
