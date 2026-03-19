import { ComponentProps, ReactNode } from 'react';

export interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-[#7B3FE4] text-white hover:bg-[#6A32C9] focus:ring-[#7B3FE4] shadow-sm',
    secondary: 'bg-[#F59E0B] text-white hover:bg-[#D98A08] focus:ring-[#F59E0B] shadow-sm',
    outline: 'border-2 border-[#7B3FE4] text-[#7B3FE4] hover:bg-[#F3EFFF] focus:ring-[#7B3FE4]',
    ghost: 'text-slate-600 hover:text-[#7B3FE4] hover:bg-slate-50 focus:ring-slate-200',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
