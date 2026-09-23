import React from 'react';

/**
 * Standardized Section Heading with eyebrow, balanced H2 title,
 * and optional supporting text strictly bounded by ~65ch line length.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) {
  const isCentered = align === 'center';

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCentered ? 'text-center mx-auto' : 'text-left'
      } ${className}`}
    >
      {eyebrow && (
        <span className="eyebrow block text-xs tracking-[0.12em] uppercase font-semibold text-[#2563EB] mb-2.5">
          {eyebrow}
        </span>
      )}
      <h2 className="text-slate-900 font-semibold tracking-tight text-[clamp(2rem,3.2vw,2.75rem)] leading-[1.2] max-w-[32ch] balance">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-slate-600 text-[17px] md:text-[18px] leading-[1.65] max-w-[65ch] ${
            isCentered ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
