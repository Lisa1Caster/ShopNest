import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Phone } from 'lucide-react';
import { businessConfig } from '../config/business.js';
import Button from './ui/Button.jsx';

export default function Navbar({ onOpenShopModal, cartCount = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-slate-200 shadow-[0_2px_12px_rgba(15,23,42,0.06)] py-3.5'
          : 'bg-white border-slate-200 py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="flex items-center gap-2 group text-slate-900"
          aria-label={`${businessConfig.name} Home`}
        >
          <span className="font-heading text-2xl font-bold tracking-tight text-slate-950 group-hover:text-[#2563EB] transition-colors">
            {businessConfig.name}
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav
          className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-600"
          aria-label="Main Navigation"
        >
          {businessConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-slate-950 hover:underline underline-offset-8 transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Quick Call Link */}
          <a
            href={`tel:${businessConfig.phone}`}
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-[#2563EB] px-2 py-1 transition-colors"
            title={`Call ${businessConfig.phoneDisplay}`}
          >
            <Phone className="w-4 h-4 text-slate-400" />
            <span className="tabular-nums">{businessConfig.phoneDisplay}</span>
          </a>

          {/* Cart / Shop Trigger Button */}
          <button
            type="button"
            onClick={onOpenShopModal}
            className="relative inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-[8px] transition-colors"
            aria-label="View Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4 text-slate-700" />
            <span className="hidden sm:inline">Bag</span>
            <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-semibold text-white bg-[#2563EB] rounded-[6px] tabular-nums">
              {cartCount}
            </span>
          </button>

          {/* Main CTA */}
          <div className="hidden lg:block">
            <Button
              variant="primary"
              size="default"
              onClick={onOpenShopModal}
            >
              {businessConfig.mainCta}
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="md:hidden p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-[8px] transition-colors focus-visible:outline-2 focus-visible:outline-blue-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-4 text-base font-medium text-slate-700">
            {businessConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="py-1 text-slate-800 hover:text-[#2563EB] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-3">
            <a
              href={`tel:${businessConfig.phone}`}
              className="flex items-center justify-center gap-2 py-3 text-sm font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-[8px]"
            >
              <Phone className="w-4 h-4 text-slate-500" />
              <span>Call: {businessConfig.phoneDisplay}</span>
            </a>
            <Button
              variant="primary"
              size="large"
              className="w-full"
              onClick={() => {
                closeMobileMenu();
                onOpenShopModal();
              }}
            >
              {businessConfig.mainCta}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
