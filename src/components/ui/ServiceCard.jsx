import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * Elevated Service / Department Card.
 * Consistent 16px radius, fixed aspect ratio image, subtle hover zoom,
 * clean unboxed typography, and clear action.
 */
export default function ServiceCard({
  title,
  category,
  description,
  image,
  itemCount,
  featuredTag,
  onSelect,
}) {
  return (
    <div
      onClick={onSelect}
      className="group relative flex flex-col bg-white rounded-[16px] overflow-hidden border border-slate-200/80 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_32px_-4px_rgba(15,23,42,0.09)] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
    >
      {/* Aspect Ratio 4:3 Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />
        {featuredTag && (
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-[6px] text-xs font-medium text-slate-800 shadow-sm">
            {featuredTag}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-7 justify-between">
        <div>
          {/* Unboxed clean metadata with dot separator */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 uppercase tracking-wider mb-2.5">
            <span>{category}</span>
            {itemCount && (
              <>
                <span aria-hidden="true">·</span>
                <span>{itemCount}</span>
              </>
            )}
          </div>

          <h3 className="text-xl sm:text-[22px] font-semibold text-slate-900 group-hover:text-[#2563EB] transition-colors leading-snug">
            {title}
          </h3>

          <p className="mt-3 text-slate-600 text-[15px] sm:text-[16px] leading-[1.6]">
            {description}
          </p>
        </div>

        {/* Action Link Footer */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-[#2563EB]">
          <span>Explore Department</span>
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-[8px] bg-blue-50 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </div>
  );
}
