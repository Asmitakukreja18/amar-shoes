import React from 'react';
import { MapPin, Mail, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export default function StoreInfo() {
  return (
    <section id="store-location" className="py-16 bg-white border-t border-slate-200 relative overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Our Store In Amravati</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Experience Comfort Firsthand at <span className="text-red-600">Amar Shoe Stores</span>
          </h2>
          <p className="text-slate-600 text-sm font-medium">
            Visit our spacious showroom at Chitra Chowk Hotel for trial lounge comfort, personalized fitting advice, and exclusive store-only discounts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Card */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-md">
            
            <div className="space-y-6">
              
              {/* Store Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-red-100 text-red-600 border border-red-200 shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Store Address</h3>
                  <p className="text-base font-extrabold text-slate-900 mt-1 leading-snug">
                    {STORE_INFO.name}
                  </p>
                  <p className="text-sm text-red-600 font-bold mt-0.5">
                    {STORE_INFO.address}
                  </p>
                </div>
              </div>

              {/* Email Contact */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-blue-100 text-blue-700 border border-blue-200 shrink-0 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Direct Email</h3>
                  <a 
                    href={`mailto:${STORE_INFO.email}`}
                    className="text-base font-extrabold text-slate-900 hover:text-red-600 transition-colors mt-1 block"
                  >
                    {STORE_INFO.email}
                  </a>
                  <span className="text-xs text-slate-500 font-medium">Quick response within 2 hours</span>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-emerald-100 text-emerald-700 border border-emerald-200 shrink-0 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone & WhatsApp Order</h3>
                  <p className="text-base font-extrabold text-slate-900 mt-1">
                    {STORE_INFO.phone}
                  </p>
                  <span className="text-xs text-emerald-700 font-bold">Instant Footwear Assistance</span>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-amber-100 text-amber-700 border border-amber-200 shrink-0 shadow-sm">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Store Timings</h3>
                  <p className="text-sm font-extrabold text-slate-900 mt-1">
                    {STORE_INFO.hours}
                  </p>
                  <span className="text-xs text-slate-500 font-medium">Open All 7 Days a Week</span>
                </div>
              </div>

            </div>

            {/* Google Maps Action */}
            <div className="pt-4 border-t border-slate-200">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full py-3.5 px-4 text-xs font-bold flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Open Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Embedded Interactive Map Card */}
          <div className="lg:col-span-7 bg-slate-100 border border-slate-200 rounded-3xl overflow-hidden relative min-h-[380px] shadow-md group">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-slate-100 flex flex-col items-center justify-center p-8 text-center space-y-4">
              <div className="relative w-20 h-20 rounded-full border-4 border-red-500 flex items-center justify-center bg-white shadow-xl">
                <MapPin className="w-10 h-10 text-red-600 animate-bounce" />
              </div>

              <div className="space-y-1 max-w-md">
                <h3 className="text-xl font-black text-slate-900">Amar Shoe Stores Location</h3>
                <p className="text-xs text-red-600 font-bold">
                  Chitra Chowk Hotel, Hindustan International, Amravati, Maharashtra - 444601
                </p>
                <p className="text-xs text-slate-600 font-medium">
                  Central location in Amravati city with ample trial space and dedicated customer parking.
                </p>
              </div>

              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp px-6 py-3 text-xs font-bold flex items-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Navigate to Store</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
