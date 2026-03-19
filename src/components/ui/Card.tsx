import { ComponentProps, ReactNode } from 'react';

export interface CardProps extends ComponentProps<'div'> {
  children: ReactNode;
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-slate-100 p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}
