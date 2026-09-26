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
import { Filter, SlidersHorizontal, Sparkles, Phone, ShieldCheck, Zap } from 'lucide-react';

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
    <div className="min-h-screen bg-[#0b0f19] text-gray-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      
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

        {/* Featured Boys Collection Banner Card */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-10">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-red-950 border border-blue-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 text-center md:text-left z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/30 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Special Boys Collection Launch</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
                Trending Boys Sneakers, School & Sports Shoes
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-xl font-light">
                High-durability high-top sneakers, genuine leather black school shoes, sports runners & festive juttis crafted specifically for boys!
              </p>
            </div>

            <button
              onClick={() => scrollToCatalog('boys')}
              className="btn-primary px-8 py-3.5 text-xs font-extrabold flex items-center gap-2 whitespace-nowrap z-10 shadow-lg shadow-blue-900/40"
            >
              <span>Explore Boys Shoes</span>
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
            </button>

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </section>

        {/* Footwear Catalog Section */}
        <section id="catalog" className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-slate-800 pb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Amar Shoe Collection</span>
              </div>
              <h2 className="text-3xl font-black text-white font-heading">
                {activeCategory === 'boys' ? "Boys Special Footwear Collection" : "Explore Our Footwear Catalog"}
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                Showing {filteredProducts.length} premium styles available at Chitra Chowk, Amravati
              </p>
            </div>

            {/* Sorting Dropdown */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400 font-semibold flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
                Sort By:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-900 border border-slate-700/80 text-xs text-white rounded-xl px-3 py-2 font-medium focus:outline-none focus:border-red-500"
              >
                <option value="featured">Featured / Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated (Stars)</option>
              </select>
            </div>
          </div>

          {/* Category Filter Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs rounded-xl font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-red-600 via-blue-600 to-amber-500 text-white shadow-lg shadow-red-600/20 scale-105'
                    : 'bg-slate-900 border border-slate-800 text-gray-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Product Cards Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-slate-900/40 rounded-3xl border border-slate-800 space-y-4">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Floating WhatsApp Quick Button */}
      <a
        href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent("Hi Amar Shoe Stores, Amravati! I am inquiring about Boys shoes from your website.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full btn-whatsapp shadow-2xl flex items-center justify-center group hover:scale-110 transition-transform"
        title="Chat with Amar Shoe Stores on WhatsApp"
      >
        <Phone className="w-6 h-6 animate-pulse" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-xs font-extrabold whitespace-nowrap pl-0 group-hover:pl-2">
          Chat on WhatsApp
        </span>
      </a>

    </div>
  );
}
