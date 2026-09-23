import React from 'react';
import { businessConfig } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';

/**
 * Testimonials section.
 * Per project specification: Rendered ONLY if real testimonials exist in businessConfig.
 * If null or empty, this component returns null without any filler.
 */
export default function Testimonials() {
  const testimonials = businessConfig.testimonials;

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="section-padding bg-white border-y border-slate-100">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Reviews"
          title="What Our Customers Say"
          description="Honest experiences from customers across Birmingham and the UK."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#FAFAF9] rounded-[16px] border border-slate-200"
            >
              <p className="text-slate-700 italic mb-4">"{item.quote}"</p>
              <div className="text-sm font-semibold text-slate-900">{item.author}</div>
              {item.location && (
                <div className="text-xs text-slate-500">{item.location}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
