import { ReactNode } from 'react';
import { Target } from 'lucide-react';

export function ActionBox({ title = 'Ação Prática', children }: { title?: string; children: ReactNode }) {
  return (
    <div className="bg-[#FFF9F0] rounded-2xl p-6 my-8 border border-[#FDE6C2]">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-[#F59E0B] p-2 rounded-lg text-white">
          <Target className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-bold text-[#925E07]">{title}</h3>
      </div>
      <div className="text-[#7A510A] leading-relaxed">
        {children}
      </div>
    </div>
  );
}
