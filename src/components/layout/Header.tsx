import { Menu } from 'lucide-react';

interface HeaderProps {
  onOpenSidebar: () => void;
  title: string;
}

export function Header({ onOpenSidebar, title }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-100 lg:hidden">
      <div className="flex items-center justify-between px-4 h-16">
        <button 
          onClick={onOpenSidebar}
          className="p-2 -ml-2 text-slate-600 hover:text-[#7B3FE4] transition-colors rounded-lg hover:bg-slate-50"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h2 className="font-semibold text-slate-800 text-sm truncate max-w-[200px]">
          {title}
        </h2>
        <div className="w-10" /> {/* Spacer for centering */}
      </div>
    </header>
  );
}
