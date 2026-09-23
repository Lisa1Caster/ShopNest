import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { businessConfig } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  if (!businessConfig.faqs || businessConfig.faqs.length === 0) {
    return null;
  }

  return (
    <section id="faq" className="section-padding bg-white border-y border-slate-100">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Help & Support"
          title="Frequently Asked Questions"
          description="Straightforward answers regarding dispatch, deliveries, returns, and ordering."
        />

        <div className="max-w-3xl divide-y divide-slate-200 border-y border-slate-200">
          {businessConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-6">
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex items-center justify-between text-left gap-4 group focus-visible:outline-2 focus-visible:outline-blue-600 rounded-[4px]"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg md:text-[19px] font-semibold text-slate-900 group-hover:text-[#2563EB] transition-colors">
                    {faq.question}
                  </span>
                  <span
                    className={`p-1.5 rounded-[6px] bg-slate-100 group-hover:bg-blue-50 text-slate-600 group-hover:text-[#2563EB] transition-all transform ${
                      isOpen ? 'rotate-180 bg-blue-50 text-[#2563EB]' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3.5 pr-8">
                    <p className="text-slate-600 text-[16px] md:text-[17px] leading-[1.65]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
