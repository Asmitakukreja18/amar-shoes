import React from 'react';
import { ArrowRight, MapPin, Award, Sparkles, ShieldCheck } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export default function Hero({ onExploreClick }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-100/80">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-red-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300/60 text-amber-800 text-xs font-bold shadow-sm">
              <Award className="w-4 h-4 text-amber-600" />
              <span>Amravati’s Most Trusted Shoe Store</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.15]">
              Step Into Royalty & Comfort At <span className="text-red-600">AMAR SHOE</span> STORES
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Explore Amravati’s finest collection of high-performance sneakers, handcrafted Italian leather formal shoes, boys special footwear, regal wedding juttis, and designer women's heels.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="btn-primary w-full sm:w-auto px-8 py-4 text-base flex items-center justify-center gap-3 group shadow-xl"
              >
                <span>Explore Shoes Catalog</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto px-6 py-4 text-sm flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4 text-red-600" />
                <span>Visit Store in Amravati</span>
              </a>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">100%</div>
                <div className="text-xs text-slate-500 font-bold">Original Quality</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-black text-amber-600 font-heading">5,000+</div>
                <div className="text-xs text-slate-500 font-bold">Styles in Store</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-black text-blue-700 font-heading">Amravati</div>
                <div className="text-xs text-slate-500 font-bold">Express Delivery</div>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white group">
              <img
                src="/assets/hero_light.jpg"
                alt="Amar Shoe Stores Footwear Collection Showcase"
                className="w-full h-[380px] sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl flex items-center justify-between">
                <div>
                  <span className="text-xs text-amber-600 font-bold uppercase tracking-wider block">Featured Showcase</span>
                  <span className="text-sm font-bold text-slate-900 block">Nitro Runner & Oxford Leather Series</span>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-red-600 text-white shadow-md">
                  In Stock
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
