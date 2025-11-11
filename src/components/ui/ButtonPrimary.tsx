import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonPrimaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const ButtonPrimary = ({ children, className, ...props }: ButtonPrimaryProps) => {
  return (
    <button
      className={cn(
        "bg-brand-earth-dark text-white px-6 py-3 rounded-full font-medium",
        "hover:bg-brand-earth transition-all duration-200",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
