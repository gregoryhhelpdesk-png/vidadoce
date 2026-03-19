import { ReactNode } from 'react';
import { Quote } from 'lucide-react';

export function HighlightBox({ children, author }: { children: ReactNode; author?: string }) {
  return (
    <div className="relative bg-gradient-to-br from-[#F3EFFF] to-white rounded-2xl p-8 my-8 border border-[#E9DFFF] shadow-sm">
      <Quote className="absolute top-6 left-6 w-8 h-8 text-[#7B3FE4] opacity-20" />
      <div className="relative z-10">
        <p className="text-xl font-medium text-[#4A258A] leading-relaxed italic">
          {children}
        </p>
        {author && (
          <p className="mt-4 text-sm font-semibold text-[#7B3FE4] uppercase tracking-wider">
            — {author}
          </p>
        )}
      </div>
    </div>
  );
}
