import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonSecondaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const ButtonSecondary = ({ children, className, ...props }: ButtonSecondaryProps) => {
  return (
    <button
      className={cn(
        "bg-brand-gold text-brand-earth-dark px-6 py-3 rounded-full font-medium",
        "hover:bg-brand-gold-light transition-all duration-200",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
