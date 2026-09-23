import React from 'react';
import { businessConfig } from '../config/business.js';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer({ onOpenShopModal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800/80">
          {/* Col 1: Wordmark & Summary */}
          <div className="lg:col-span-4">
            <a
              href="#"
              className="font-heading text-2xl font-bold tracking-tight text-white inline-block mb-3"
            >
              {businessConfig.name}
            </a>
            <p className="text-slate-400 text-[15px] leading-relaxed max-w-sm mb-6">
              {businessConfig.tagline}. Curated quality essentials dispatched directly from our Yardley, Birmingham hub.
            </p>
            <div className="text-xs text-slate-500">
              Operating Hours: {businessConfig.openingHours}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-wider font-semibold text-slate-300 mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5 text-sm">
              {businessConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={onOpenShopModal}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Browse Catalog
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Information */}
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-wider font-semibold text-slate-300 mb-4">
              Contact & Fulfillment
            </div>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                <span>{businessConfig.fullAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a
                  href={`tel:${businessConfig.phone}`}
                  className="hover:text-white text-slate-300 tabular-nums transition-colors"
                >
                  {businessConfig.phoneDisplay}
                </a>
              </li>
              {businessConfig.email && (
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                  <a
                    href={`mailto:${businessConfig.email}`}
                    className="hover:text-white text-slate-300 transition-colors"
                  >
                    {businessConfig.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} {businessConfig.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Dispatched from Yardley, Birmingham, UK</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
