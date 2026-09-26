import React from 'react';
import { MapPin, Mail, Heart, ShieldCheck, Award } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 text-slate-600 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/logo.jpg" 
                alt="Amar Shoe Stores Logo" 
                className="w-10 h-10 rounded-full border border-amber-400 object-contain bg-white p-0.5"
              />
              <span className="text-xl font-black text-slate-900 tracking-tight font-heading">
                AMAR <span className="text-red-600">SHOE</span> STORES
              </span>
            </div>

            <p className="text-slate-600 text-xs leading-relaxed max-w-sm font-medium">
              Your premier destination in Amravati for high quality sneakers, genuine leather formal footwear, boys footwear, women's heels, and handcrafted royal ethnic juttis.
            </p>

            <div className="space-y-1.5 text-xs text-slate-700 font-semibold">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
                <span>{STORE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                <a href={`mailto:${STORE_INFO.email}`} className="hover:text-red-600 transition-colors font-bold">{STORE_INFO.email}</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider font-heading">Footwear Categories</h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><a href="#catalog" className="hover:text-red-600 transition-colors">Boys Special Footwear Collection</a></li>
              <li><a href="#catalog" className="hover:text-red-600 transition-colors">Sneakers & Running Shoes</a></li>
              <li><a href="#catalog" className="hover:text-red-600 transition-colors">Men's Leather Oxfords & Loafers</a></li>
              <li><a href="#catalog" className="hover:text-red-600 transition-colors">Women's Designer Heels & Sandals</a></li>
              <li><a href="#catalog" className="hover:text-red-600 transition-colors">Ethnic Zardozi Juttis & Mojaris</a></li>
            </ul>
          </div>

          {/* Store Hours & Guarantees */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider font-heading">Why Shop With Us?</h4>
            <ul className="space-y-2 text-xs text-slate-700 font-semibold">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Genuine Branded Quality</span>
              </li>
              <li className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-600" />
                <span>30+ Years Trust in Amravati Market</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-700" />
                <span>Trial Lounge at Chitra Chowk Store</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500 font-medium">
          <div>
            © {new Date().getFullYear()} <strong>Amar Shoe Stores</strong>, Amravati. All rights reserved.
          </div>
          <div className="flex items-center gap-1 font-bold text-slate-700">
            <span>Designed for Excellence</span>
            <Heart className="w-3 h-3 text-red-600 fill-red-600" />
            <span>in Amravati, MH</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
