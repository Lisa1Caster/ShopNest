import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, CheckCircle2 } from 'lucide-react';
import { businessConfig } from '../config/business.js';
import Button from './ui/Button.jsx';
import SectionHeading from './ui/SectionHeading.jsx';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate swift local handling
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  return (
    <section id="contact" className="section-padding bg-[#FAFAF9]">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Get In Touch"
          title="We Are Here to Assist You"
          description="Have questions about product availability, deliveries, or returns? Reach our Yardley team directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Details & Location */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Address card */}
              <div className="flex items-start gap-4 p-5 bg-white rounded-[16px] border border-slate-200/80 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.04)]">
                <div className="p-3 bg-blue-50 text-[#2563EB] rounded-[8px] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    Fulfillment Hub & Address
                  </h3>
                  <p className="mt-1 text-slate-600 text-[15px] leading-relaxed">
                    {businessConfig.fullAddress}
                  </p>
                  <a
                    href={businessConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone card */}
              <div className="flex items-start gap-4 p-5 bg-white rounded-[16px] border border-slate-200/80 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.04)]">
                <div className="p-3 bg-blue-50 text-[#2563EB] rounded-[8px] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    Direct Phone Line
                  </h3>
                  <p className="mt-1 text-slate-600 text-[15px]">
                    Direct voice support with our team in Birmingham.
                  </p>
                  <a
                    href={`tel:${businessConfig.phone}`}
                    className="inline-block mt-2 text-base font-semibold text-[#2563EB] hover:underline tabular-nums"
                  >
                    {businessConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Email card */}
              {businessConfig.email && (
                <div className="flex items-start gap-4 p-5 bg-white rounded-[16px] border border-slate-200/80 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.04)]">
                  <div className="p-3 bg-blue-50 text-[#2563EB] rounded-[8px] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">
                      Email Enquiries
                    </h3>
                    <p className="mt-1 text-slate-600 text-[15px]">
                      Drop us an email anytime for swift responses.
                    </p>
                    <a
                      href={`mailto:${businessConfig.email}`}
                      className="inline-block mt-2 text-sm font-semibold text-[#2563EB] hover:underline"
                    >
                      {businessConfig.email}
                    </a>
                  </div>
                </div>
              )}

              {/* Opening hours */}
              <div className="flex items-start gap-4 p-5 bg-white rounded-[16px] border border-slate-200/80 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.04)]">
                <div className="p-3 bg-amber-50 text-[#D97706] rounded-[8px] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    Operating Hours
                  </h3>
                  <p className="mt-1 text-slate-600 text-[15px] leading-relaxed">
                    {businessConfig.openingHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Usable Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[16px] p-8 md:p-10 border border-slate-200/80 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)]">
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                Send Us a Message
              </h3>
              <p className="text-slate-600 text-sm mb-8">
                Fill out the form below and a member of our team will respond within 24 business hours.
              </p>

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">
                    Message Received
                  </h4>
                  <p className="text-slate-600 max-w-md mx-auto text-[15px]">
                    Thank you, {formData.name || 'there'}. We have received your note and will be in touch shortly.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', message: '' });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full px-4 py-3 rounded-[8px] border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 focus:outline-none text-[15px]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.co.uk"
                        className="w-full px-4 py-3 rounded-[8px] border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 focus:outline-none text-[15px]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Phone / Order ID (Optional)
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+44 or #ORD-1234"
                        className="w-full px-4 py-3 rounded-[8px] border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 focus:outline-none text-[15px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Message or Inquiry
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help with your order or questions?"
                      className="w-full px-4 py-3 rounded-[8px] border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 focus:outline-none text-[15px] resize-y"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="large"
                    disabled={submitting}
                    className="w-full"
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
