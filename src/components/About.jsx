import React from 'react';
import { businessConfig } from '../config/business.js';
import Button from './ui/Button.jsx';
import { Package, MapPin } from 'lucide-react';

export default function About({ onOpenShopModal }) {
  const { aboutStory, images } = businessConfig;

  return (
    <section id="about" className="section-padding bg-white border-y border-slate-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Craft & Text */}
          <div className="lg:col-span-6">
            <span className="eyebrow block text-xs tracking-[0.12em] uppercase font-semibold text-[#2563EB] mb-3">
              About ShopNest
            </span>
            <h2 className="text-slate-950 font-semibold tracking-tight text-[clamp(2rem,3vw,2.75rem)] leading-[1.2] mb-6">
              {aboutStory.heading}
            </h2>

            <div className="space-y-4 text-slate-600 text-[17px] md:text-[18px] leading-[1.65]">
              <p>{aboutStory.paragraphOne}</p>
              <p>{aboutStory.paragraphTwo}</p>
            </div>

            {/* Quiet trust credentials */}
            <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-blue-50 text-[#2563EB] rounded-[8px] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                    {aboutStory.statOne.label}
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-slate-900 mt-0.5">
                    {aboutStory.statOne.value}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-amber-50 text-[#D97706] rounded-[8px] shrink-0">
                  <Package className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                    {aboutStory.statTwo.label}
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-slate-900 mt-0.5">
                    {aboutStory.statTwo.value}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Button variant="primary" onClick={onOpenShopModal}>
                {businessConfig.mainCta}
              </Button>
              <Button variant="outline" href="#contact">
                {businessConfig.secondaryCta}
              </Button>
            </div>
          </div>

          {/* Right Column: Workshop / Fulfillment Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[16px] overflow-hidden border border-slate-200/80 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.06)] aspect-[4/3] bg-slate-100 group">
              <img
                src={images.about}
                alt="ShopNest Birmingham fulfillment workspace"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
