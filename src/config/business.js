/**
 * ShopNest Business Configuration
 * Central source of truth for all business text, contact details, colors,
 * imagery, curated services, and product catalogs.
 *
 * Non-technical owners can edit this single file to update the entire site.
 */

// Generated local high-fidelity assets
import heroImage from '../assets/images/shopnest_hero_showcase_1790194374972.jpg';
import homeLivingImage from '../assets/images/shopnest_home_living_1790194391370.jpg';
import techEssentialsImage from '../assets/images/shopnest_tech_essentials_1790194403059.jpg';
import lifestyleGoodsImage from '../assets/images/shopnest_lifestyle_goods_1790194415090.jpg';
import aboutCraftImage from '../assets/images/shopnest_about_craft_1790194426002.jpg';

export const businessConfig = {
  // Core Business Identity
  name: 'ShopNest',
  businessType: 'E-commerce',
  tagline: 'Everything You Need, All in One Place',
  eyebrow: 'Birmingham, UK · Curated E-Commerce',
  
  // Location & Contact
  cityArea: '21a Greenfield Lane, Yardley, Birmingham, United Kingdom, B26 1DX',
  fullAddress: '21a Greenfield Lane, Yardley, Birmingham, United Kingdom, B26 1DX',
  phone: '447985618978',
  phoneDisplay: '+44 7985 618978',
  email: 'orders@shopnest.co.uk',
  // WhatsApp is null - will not render WhatsApp CTA button per guidelines
  whatsapp: null,
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=21a+Greenfield+Lane,+Yardley,+Birmingham,+B26+1DX',
  openingHours: 'Mon – Sat: 9:00 AM – 6:00 PM (Online Orders 24/7)',

  // Story & Description
  description:
    'ShopNest is a curated online marketplace based in Yardley, Birmingham. We bring together dependable everyday essentials, home living goods, and minimal tech accessories into one seamless experience designed for lasting utility.',
  
  aboutStory: {
    heading: 'Thoughtfully Selected Essentials for Everyday Living',
    paragraphOne:
      'Founded with a simple goal: to strip away the noise of overwhelming online stores and offer a calm, dependable collection of items you actually need. Every product in our store is chosen for its material quality, clean aesthetic, and everyday durability.',
    paragraphTwo:
      'Operating directly from our fulfillment base in Yardley, Birmingham, we dispatch orders swiftly across the West Midlands and nationwide, backed by personal customer care and transparent service.',
    statOne: { label: 'Location', value: 'Yardley, Birmingham' },
    statTwo: { label: 'Dispatch', value: 'Within 24 Hours' },
  },

  // Color Palette & Branding
  theme: {
    primary: '#2563EB',      // Royal Blue
    primaryHover: '#1D4ED8',
    secondary: '#F59E0B',    // Amber Accent
    secondaryHover: '#D97706',
    ink: '#0F172A',          // Near-black slate
    muted: '#64748B',        // Muted gray
    surface: '#FFFFFF',
    canvas: '#FAFAF9',       // Soft off-white
    neutralAlt: '#F1F5F9',   // Light neutral for alternating sections
    border: '#E2E8F0',
  },

  // Actions & Navigation
  mainCta: 'Shop Now',
  secondaryCta: 'Contact Us',
  navLinks: [
    { label: 'Collections', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Why ShopNest', href: '#why-us' },
    { label: 'Help & FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],

  // Imagery
  images: {
    hero: heroImage,
    about: aboutCraftImage,
    homeLiving: homeLivingImage,
    techEssentials: techEssentialsImage,
    lifestyleGoods: lifestyleGoodsImage,
  },

  // Main Services / Curated Collections
  services: [
    {
      id: 'home-living',
      title: 'Home & Living Essentials',
      category: 'Department 01',
      description:
        'Tactile stoneware ceramics, organic linen textiles, and understated home organization designed to elevate your everyday domestic rhythm.',
      image: homeLivingImage,
      itemCount: '24 Curated Pieces',
      featuredTag: 'Popular',
    },
    {
      id: 'tech-workspace',
      title: 'Tech & Workspace Gear',
      category: 'Department 02',
      description:
        'Precision aluminum desk organizers, premium acoustic audio, and braided cable solutions tailored for clean, focused productivity.',
      image: techEssentialsImage,
      itemCount: '18 Essential Tools',
      featuredTag: 'Modern Living',
    },
    {
      id: 'lifestyle-goods',
      title: 'Everyday Carry & Lifestyle',
      category: 'Department 03',
      description:
        'Durable canvas totes, double-walled thermal flasks, and crafted brass keychains made to accompany daily commutes and weekend journeys.',
      image: lifestyleGoodsImage,
      itemCount: '16 Tested Goods',
      featuredTag: 'Everyday Utility',
    },
  ],

  // Unique Selling Points (Why Choose Us)
  uniqueSellingPoints: [
    {
      number: '01',
      title: 'Carefully Vetted Quality',
      description:
        'Every single item is physically tested for durability, tactile feel, and real utility before it enters our catalog.',
    },
    {
      number: '02',
      title: 'Fast Birmingham Dispatch',
      description:
        'Packed securely at our Yardley hub and dispatched with tracked delivery across the UK within 24 hours.',
    },
    {
      number: '03',
      title: 'Direct Personal Support',
      description:
        'Call our team on +44 7985 618978 for order questions, parcel tracking, or genuine product advice.',
    },
    {
      number: '04',
      title: 'Straightforward 30-Day Returns',
      description:
        'Simple, hassle-free returns on all standard purchases. Clear communication and prompt refunds every time.',
    },
  ],

  // Interactive Catalog Products for "Shop Now" Experience
  catalogProducts: [
    {
      id: 'prod-1',
      name: 'Artisanal Stoneware Mug Set',
      department: 'Home & Living',
      price: '£28.00',
      numericPrice: 28.00,
      description: 'Hand-thrown textured ceramic mugs with a satin matte glaze, microwave and dishwasher safe.',
      image: homeLivingImage,
      tag: 'Best Seller',
    },
    {
      id: 'prod-2',
      name: 'Precision Desk Mat & Organizer',
      department: 'Tech & Workspace',
      price: '£34.00',
      numericPrice: 34.00,
      description: 'Ultra-smooth vegan leather desk blotter with integrated pen rest and cable groove.',
      image: techEssentialsImage,
      tag: 'Workspace',
    },
    {
      id: 'prod-3',
      name: 'Minimal Heavy Canvas Tote',
      department: 'Everyday Carry',
      price: '£26.00',
      numericPrice: 26.00,
      description: '16oz organic cotton duck canvas with reinforced handles and interior zip pocket.',
      image: lifestyleGoodsImage,
      tag: 'Everyday',
    },
    {
      id: 'prod-4',
      name: 'Double-Walled Thermal Flask (600ml)',
      department: 'Everyday Carry',
      price: '£22.00',
      numericPrice: 22.00,
      description: 'Food-grade stainless steel with powder-coated matte finish. Keeps hot 12h, cold 24h.',
      image: lifestyleGoodsImage,
      tag: 'Essentials',
    },
  ],

  // Frequently Asked Questions
  faqs: [
    {
      question: 'How quickly are orders dispatched?',
      answer:
        'Orders placed before 2:00 PM are packed and handed to Royal Mail or DPD tracking on the same business day from our Birmingham location. Standard delivery takes 2–3 business days.',
    },
    {
      question: 'Can I track my delivery in real time?',
      answer:
        'Yes. As soon as your order leaves our Yardley dispatch hub, you will receive an email and SMS confirmation containing your active parcel tracking link.',
    },
    {
      question: 'What is your return policy?',
      answer:
        'We offer a 30-day return window on all unused items in their original packaging. Contact us with your order number and we will provide return instructions and prompt refunds.',
    },
    {
      question: 'Can I speak to someone about a product before buying?',
      answer:
        'Absolutely. You can reach our Birmingham team directly by calling +44 7985 618978 during operating hours or by submitting the contact form below.',
    },
  ],

  // Testimonials: Set to null per instructions:
  // "TESTIMONIALS — include ONLY if {{TESTIMONIALS}} contains real content. If none provided, omit this section entirely — do not replace it with filler."
  testimonials: null,
};
