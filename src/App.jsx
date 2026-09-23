import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Faq from './components/Faq.jsx';
import Footer from './components/Footer.jsx';
import ShopModal from './components/ShopModal.jsx';
import { businessConfig } from './config/business.js';

export default function App() {
  const [isShopModalOpen, setIsShopModalOpen] = useState(false);
  const [cart, setCart] = useState([
    {
      ...businessConfig.catalogProducts[0],
      quantity: 1,
    },
  ]);

  const handleOpenShopModal = () => {
    setIsShopModalOpen(true);
  };

  const handleCloseShopModal = () => {
    setIsShopModalOpen(false);
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      setCart((prev) => prev.filter((item) => item.id !== productId));
    } else {
      setCart((prev) =>
        prev.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleSelectService = (_service) => {
    setIsShopModalOpen(true);
  };

  const cartTotalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-[#0F172A] selection:bg-blue-100 selection:text-[#2563EB]">
      {/* Top Navigation */}
      <Navbar
        onOpenShopModal={handleOpenShopModal}
        cartCount={cartTotalItems}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenShopModal={handleOpenShopModal} />

        {/* 2. Curated Services / Collections */}
        <Services onSelectService={handleSelectService} />

        {/* 3. About Section */}
        <About onOpenShopModal={handleOpenShopModal} />

        {/* 4. Why Choose Us (USPs) */}
        <WhyChooseUs />

        {/* 5. Testimonials (omitted cleanly if null) */}
        <Testimonials />

        {/* 6. Contact Section */}
        <Contact />

        {/* 7. FAQ Section */}
        <Faq />
      </main>

      {/* Footer */}
      <Footer onOpenShopModal={handleOpenShopModal} />

      {/* Interactive Shop & Cart Modal */}
      <ShopModal
        isOpen={isShopModalOpen}
        onClose={handleCloseShopModal}
        cart={cart}
        onAddToCart={handleAddToCart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
