import { ReactNode } from 'react';
import { BookOpenCheck } from 'lucide-react';

export function SummaryBox({ children }: { children: ReactNode }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-6 my-8 border border-slate-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-slate-200 p-2 rounded-lg text-slate-700">
          <BookOpenCheck className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-bold text-slate-800">Resumo do Capítulo</h3>
      </div>
      <div className="text-slate-600 leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}
