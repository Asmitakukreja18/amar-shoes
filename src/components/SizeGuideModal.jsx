import React from 'react';
import { X, Ruler, HelpCircle } from 'lucide-react';

export default function SizeGuideModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const sizeChart = [
    { uk: '6', us: '7', eu: '39 - 40', cm: '24.5 cm' },
    { uk: '7', us: '8', eu: '40 - 41', cm: '25.4 cm' },
    { uk: '8', us: '9', eu: '41 - 42', cm: '26.2 cm' },
    { uk: '9', us: '10', eu: '42 - 43', cm: '27.1 cm' },
    { uk: '10', us: '11', eu: '44 - 45', cm: '27.9 cm' },
    { uk: '11', us: '12', eu: '45 - 46', cm: '28.8 cm' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 border border-amber-200">
              <Ruler className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900 font-heading">
                Footwear Size Conversion Chart
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                UK / India sizing standards used at Amar Shoe Stores
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Conversion Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 text-slate-900 uppercase tracking-wider font-extrabold border-b border-slate-200">
                <th className="py-3 px-4 rounded-l-xl">UK / IND Size</th>
                <th className="py-3 px-4">US Size</th>
                <th className="py-3 px-4">EU Size</th>
                <th className="py-3 px-4 rounded-r-xl">Foot Length (CM)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700 font-semibold">
              {sizeChart.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4 font-extrabold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-600" />
                    UK {row.uk}
                  </td>
                  <td className="py-3 px-4 text-slate-600">US {row.us}</td>
                  <td className="py-3 px-4 text-slate-600">EU {row.eu}</td>
                  <td className="py-3 px-4 text-amber-700 font-extrabold">{row.cm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Measuring Tip */}
        <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl space-y-2">
          <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-red-600" />
            <span>How to Measure Your Foot Length accurately:</span>
          </h4>
          <ol className="text-xs text-slate-600 space-y-1 list-decimal list-inside pl-1 font-medium">
            <li>Place a piece of plain paper flat on the floor against a straight wall.</li>
            <li>Stand on the paper with your heel lightly touching the wall.</li>
            <li>Mark the tip of your longest toe on the paper with a pencil.</li>
            <li>Measure the distance from the wall to your pencil mark in centimeters (CM).</li>
          </ol>
        </div>

        {/* Footer Action */}
        <div className="flex justify-end pt-2">
          <button
            onClick={onClose}
            className="btn-primary px-6 py-2.5 text-xs font-bold"
          >
            Got It, Thanks!
          </button>
        </div>

      </div>
    </div>
  );
}
