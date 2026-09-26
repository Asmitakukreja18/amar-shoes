import React from 'react';
import { Star, Quote, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
            Customer Feedback
          </span>
          <h2 className="text-3xl font-black text-slate-900">
            Loved by Footwear Lovers in <span className="text-red-600">Amravati</span>
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Read what our valued customers say about fit, durability, and service at Amar Shoe Stores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div 
              key={item.id}
              className="bg-white border border-slate-200 p-6 rounded-3xl relative flex flex-col justify-between hover:border-red-500/40 transition-all shadow-sm hover:shadow-md"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-slate-200" />
              
              <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed font-medium">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">{item.name}</h4>
                  <span className="text-[11px] text-blue-700 font-bold">{item.role}</span>
                </div>
                <Award className="w-5 h-5 text-red-600" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
