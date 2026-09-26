import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MapPin } from 'lucide-react';
import { STORE_INFO } from '../data/products';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`Footwear Inquiry from ${formData.name} - Amar Shoe Stores`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCategory: ${formData.category}\n\nMessage:\n${formData.message}\n\nTarget Store Email: ${STORE_INFO.email}`
    );

    window.open(`mailto:${STORE_INFO.email}?subject=${subject}&body=${body}`);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', category: 'General Inquiry', message: '' });
    }, 4000);
  };

  return (
    <section id="contact-us" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Have Questions or Special Footwear Requests?
            </h2>

            <p className="text-slate-600 text-sm font-medium leading-relaxed">
              Whether you need bulk wedding order footwear, custom size availability, boys shoes, or corporate leather shoe orders, send us a direct message. Our team at <strong className="text-slate-900">Amar Shoe Stores</strong> in Amravati will get back to you promptly!
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3 text-sm text-slate-800">
                <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-600">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block font-bold">Official Store Email</span>
                  <a href={`mailto:${STORE_INFO.email}`} className="font-extrabold text-slate-900 hover:text-red-600 transition-colors">
                    {STORE_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-800">
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-600">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block font-bold">Store Address</span>
                  <span className="font-extrabold text-slate-900">{STORE_INFO.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto animate-bounce" />
                <h3 className="text-xl font-extrabold text-slate-900">Inquiry Sent Successfully!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out to Amar Shoe Stores. Your message has been prepared for <strong>{STORE_INFO.email}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Send Direct Inquiry</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-700 block mb-1 font-bold">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-700 block mb-1 font-bold">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98230 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-700 block mb-1 font-bold">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. yourname@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-700 block mb-1 font-bold">Footwear Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-red-500"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Boys Footwear & Sneakers">Boys Footwear & Sneakers</option>
                      <option value="Sneakers & Sports">Sneakers & Sports</option>
                      <option value="Men's Formal Shoes">Men's Formal Shoes</option>
                      <option value="Women's Heels & Partywear">Women's Heels & Partywear</option>
                      <option value="Ethnic Wedding Juttis">Ethnic Wedding Juttis</option>
                      <option value="Bulk / Wholesale Order">Bulk / Wholesale Order</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-700 block mb-1 font-bold">Your Message / Requirements *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what size, brand, or shoe style you are looking for..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-3.5 px-6 text-xs font-extrabold flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to rbasantwani999@gmail.com</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
