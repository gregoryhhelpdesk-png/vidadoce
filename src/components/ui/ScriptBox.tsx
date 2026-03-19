import { ReactNode } from 'react';
import { MessageCircle } from 'lucide-react';

export function ScriptBox({ title = 'Script Pronto', children }: { title?: string; children: ReactNode }) {
  return (
    <div className="bg-[#F8FAFC] rounded-2xl p-6 my-6 border-l-4 border-l-[#7B3FE4] shadow-sm">
      <div className="flex items-center gap-3 mb-3">
        <MessageCircle className="w-5 h-5 text-[#7B3FE4]" />
        <h4 className="font-semibold text-slate-800">{title}</h4>
      </div>
      <div className="text-slate-600 italic bg-white p-4 rounded-xl border border-slate-100">
        "{children}"
      </div>
    </div>
  );
}
