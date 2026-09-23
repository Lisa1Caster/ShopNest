import React from 'react';
import { businessConfig } from '../config/business.js';
import SectionHeading from './ui/SectionHeading.jsx';
import ServiceCard from './ui/ServiceCard.jsx';

export default function Services({ onSelectService }) {
  return (
    <section id="services" className="section-padding bg-[#FAFAF9]">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Our Collections"
          title="Carefully Curated Everyday Departments"
          description="We avoid clutter by focusing only on items that offer genuine utility, superior materials, and calm aesthetic simplicity."
        />

        {/* Elevated 3-column grid on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessConfig.services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              category={service.category}
              description={service.description}
              image={service.image}
              itemCount={service.itemCount}
              featuredTag={service.featuredTag}
              onSelect={() => onSelectService(service)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
