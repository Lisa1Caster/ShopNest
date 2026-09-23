import React from 'react';
import { businessConfig } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-[#FAFAF9]">
      <div className="container-custom">
        <SectionHeading
          eyebrow="The ShopNest Standard"
          title="Why Customers Rely on Our Yardley Hub"
          description="We prioritize solid craftsmanship, prompt regional fulfillment, and real human support over mass-market clutter."
        />

        {/* 4 concise trust points with clean editorial numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {businessConfig.uniqueSellingPoints.map((point) => (
            <div
              key={point.number}
              className="flex flex-col p-6 sm:p-7 bg-white rounded-[16px] border border-slate-200/80 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_-4px_rgba(15,23,42,0.08)] transition-all duration-200 hover:-translate-y-1"
            >
              <div className="text-sm font-semibold tracking-wider text-[#2563EB] mb-4">
                {point.number}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {point.title}
              </h3>
              <p className="text-slate-600 text-[15px] leading-[1.6]">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
