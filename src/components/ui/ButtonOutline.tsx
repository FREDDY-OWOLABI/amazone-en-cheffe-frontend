import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonOutlineProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const ButtonOutline = ({ children, className, ...props }: ButtonOutlineProps) => {
  return (
    <button
      className={cn(
        "bg-brand-cream text-brand-earth-dark px-6 py-3 rounded-full font-medium",
        "border-2 border-brand-earth-dark/20",
        "hover:border-brand-earth-dark transition-all duration-200",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
