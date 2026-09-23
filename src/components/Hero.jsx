import React from 'react';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { businessConfig } from '../config/business.js';
import Button from './ui/Button.jsx';

export default function Hero({ onOpenShopModal }) {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-slate-950 text-white overflow-hidden">
      {/* Full-bleed background image with single measured tonal overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={businessConfig.images.hero}
          alt={`${businessConfig.name} Curated Essentials`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Measured dark scrim for 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/40" />
      </div>

      {/* Hero Content Container */}
      <div className="container-custom relative z-10 py-20 md:py-28 lg:py-32 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow: Location & Business Type */}
          <div className="inline-flex items-center gap-2 mb-6 text-sm font-medium tracking-[0.12em] uppercase text-[#F59E0B]">
            <MapPin className="w-4 h-4 text-[#F59E0B]" />
            <span>{businessConfig.eyebrow}</span>
          </div>

          {/* Large confident H1 headline */}
          <h1
            style={{ color: '#F59E0B' }}
            className="text-[clamp(2.75rem,5.2vw,4.5rem)] font-bold tracking-tight leading-[1.1] balance text-shadow-sm"
          >
            {businessConfig.tagline}
          </h1>

          {/* One short supporting line */}
          <p
            style={{ color: '#F59E0B' }}
            className="mt-6 text-lg md:text-xl leading-[1.65] max-w-[58ch] opacity-95"
          >
            Carefully curated everyday essentials, home living goods, and minimal workspace accessories — packed and dispatched with care from our Yardley, Birmingham hub.
          </p>

          {/* Primary CTA + Secondary CTA */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              variant="secondary"
              size="large"
              onClick={onOpenShopModal}
              className="gap-2 group text-slate-950 font-semibold"
            >
              <span>{businessConfig.mainCta}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="outline"
              size="large"
              href="#contact"
              className="!bg-white/10 !text-white !border-white/25 hover:!bg-white hover:!text-slate-950"
            >
              {businessConfig.secondaryCta}
            </Button>
          </div>

          {/* Quiet trust line below */}
          <div className="mt-12 pt-8 border-t border-white/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Orders Dispatched Daily from Yardley</span>
            </div>
            <span className="hidden sm:inline text-white/30">·</span>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <a
                href={`tel:${businessConfig.phone}`}
                className="hover:text-white underline underline-offset-4 tabular-nums"
              >
                {businessConfig.phoneDisplay}
              </a>
            </div>
            <span className="hidden sm:inline text-white/30">·</span>
            <span>UK-Wide Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
