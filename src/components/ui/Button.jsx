import React from 'react';

/**
 * Reusable Button component respecting the 8px border-radius scale,
 * 2x horizontal padding ratio, single-line control, and hover transitions.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'default',
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-[8px] whitespace-nowrap shrink-0 cursor-pointer transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600';

  const sizeStyles = {
    default: 'px-5 py-2.5 text-[15px] min-h-[44px]',
    large: 'px-7 py-3.5 text-[16px] min-h-[48px]',
    small: 'px-3.5 py-1.5 text-[14px] min-h-[38px]',
  };

  const variantStyles = {
    primary:
      'bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-[0_2px_8px_rgba(37,99,235,0.25)] hover:shadow-[0_4px_14px_rgba(37,99,235,0.35)] active:translate-y-[1px]',
    secondary:
      'bg-[#F59E0B] text-slate-950 font-semibold hover:bg-[#D97706] shadow-[0_2px_8px_rgba(245,158,11,0.2)] hover:shadow-[0_4px_12px_rgba(245,158,11,0.3)] active:translate-y-[1px]',
    outline:
      'border border-slate-300 bg-white text-slate-800 hover:border-slate-900 hover:text-slate-950 hover:bg-slate-50 active:translate-y-[1px]',
    ghost:
      'text-slate-700 hover:text-slate-950 hover:bg-slate-100 active:translate-y-[1px]',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.default} ${
    variantStyles[variant] || variantStyles.primary
  } ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
