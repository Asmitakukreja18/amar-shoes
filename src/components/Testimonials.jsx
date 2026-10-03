import React, { useState } from 'react';
import { Star, CheckCircle2, ThumbsUp, ExternalLink, MapPin, MessageSquare, Award } from 'lucide-react';
import { STORE_INFO, GOOGLE_REVIEWS, REVIEW_STATS } from '../data/products';

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [likedReviews, setLikedReviews] = useState({});

  const toggleLike = (id) => {
    setLikedReviews(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredReviews = activeFilter === 'all'
    ? GOOGLE_REVIEWS
    : GOOGLE_REVIEWS.filter(r => r.category === activeFilter);

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
            {/* Google Colorful G Icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
            </svg>
            <span className="text-xs font-black tracking-wider text-slate-800">
              Google Customer Reviews
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Real Reviews From Real Shoppers In <span className="text-red-600">Amravati</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Over 140+ verified in-store reviews praising our CTR mountain boots, Slim-Fit runners, and wedding footwear at Chitra Chowk.
          </p>
        </div>

        {/* Google Scorecard Banner */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Rating Number Column */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-2 border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0 lg:pr-8">
              <div className="flex items-center gap-3">
                <span className="text-5xl sm:text-6xl font-black text-slate-900 font-heading">
                  {REVIEW_STATS.averageRating}
                </span>
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-500 block mt-1">
                    Based on {REVIEW_STATS.totalReviews} Google Reviews
                  </span>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Business Listing on Google Maps</span>
              </div>
            </div>

            {/* Stars Breakdown Bars Column */}
            <div className="lg:col-span-5 space-y-1.5 px-0 lg:px-4">
              {REVIEW_STATS.breakdown.map((row) => (
                <div key={row.stars} className="flex items-center gap-3 text-xs">
                  <span className="w-6 font-bold text-slate-600 text-right">{row.stars} ★</span>
                  <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-amber-400 rounded-full transition-all duration-700" 
                      style={{ width: `${row.percentage}%` }}
                    />
                  </div>
                  <span className="w-10 text-[11px] text-slate-400 font-medium text-right">{row.percentage}%</span>
                </div>
              ))}
            </div>

            {/* Google Actions CTA Column */}
            <div className="lg:col-span-3 flex flex-col gap-3 justify-center">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full py-3 px-4 text-xs font-bold flex items-center justify-center gap-2 shadow-md"
              >
                <span>Write a Google Review</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full py-2.5 px-4 text-xs font-bold flex items-center justify-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5 text-red-600" />
                <span>See All on Google Maps</span>
              </a>
            </div>

          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
              activeFilter === 'all'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            All Reviews ({GOOGLE_REVIEWS.length})
          </button>
          <button
            onClick={() => setActiveFilter('outdoor-boots')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
              activeFilter === 'outdoor-boots'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            CTR Trekking Boots
          </button>
          <button
            onClick={() => setActiveFilter('sneakers')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
              activeFilter === 'sneakers'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            Slim-Fit Memory Foam
          </button>
          <button
            onClick={() => setActiveFilter('boys')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
              activeFilter === 'boys'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            School & Boys Footwear
          </button>
          <button
            onClick={() => setActiveFilter('mens-formal')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
              activeFilter === 'mens-formal'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            Formal & Leather Shoes
          </button>
        </div>

        {/* Google Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div 
              key={rev.id}
              className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group"
            >
              
              {/* Card Top: User Info & Google Badge */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    {/* Google Avatar Initial */}
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-xs shrink-0"
                      style={{ backgroundColor: rev.avatarColor }}
                    >
                      {rev.initial}
                    </div>

                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                        {rev.name}
                      </h4>
                      <span className="text-[11px] text-slate-400 font-medium block">
                        {rev.badge}
                      </span>
                    </div>
                  </div>

                  {/* Tiny Google G Logo */}
                  <svg className="w-4 h-4 opacity-75 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                  </svg>
                </div>

                {/* Stars and Relative Time */}
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {rev.relativeTime}
                  </span>
                </div>

                {/* Verified Purchase Footwear Pill */}
                {rev.productBought && (
                  <div className="mb-3 inline-flex items-center gap-1.5 text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/60 max-w-full truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    <span className="truncate">Verified: {rev.productBought}</span>
                  </div>
                )}

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  "{rev.comment}"
                </p>
              </div>

              {/* Card Footer: Helpful button */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <button
                  type="button"
                  onClick={() => toggleLike(rev.id)}
                  className={`flex items-center gap-1.5 transition-colors font-medium ${
                    likedReviews[rev.id] ? 'text-blue-600 font-bold' : 'hover:text-slate-900'
                  }`}
                >
                  <ThumbsUp className={`w-3.5 h-3.5 ${likedReviews[rev.id] ? 'fill-blue-600' : ''}`} />
                  <span>Helpful ({rev.likesCount + (likedReviews[rev.id] ? 1 : 0)})</span>
                </button>

                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                  Google Maps
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Demo Disclaimer / Trust Note */}
        <div className="mt-10 text-center">
          <p className="text-[11px] text-slate-400 font-medium max-w-xl mx-auto">
            ⭐ Client Presentation Demo: Curated customer reviews representing customer feedback for Amar Shoe Stores, Chitra Chowk, Amravati.
          </p>
        </div>

      </div>
    </section>
  );
}
