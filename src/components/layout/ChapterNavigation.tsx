import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface ChapterNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
  nextTitle?: string;
}

export function ChapterNavigation({ onPrevious, onNext, hasPrevious, hasNext, nextTitle }: ChapterNavigationProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-16 pt-8 border-t border-slate-100">
      <div>
        {hasPrevious && (
          <Button variant="ghost" onClick={onPrevious} className="w-full sm:w-auto">
            <ChevronLeft className="w-5 h-5 mr-2" />
            Capítulo Anterior
          </Button>
        )}
      </div>
      
      <div>
        {hasNext && (
          <Button variant="primary" onClick={onNext} className="w-full sm:w-auto group">
            <span className="flex flex-col items-start text-left mr-4">
              <span className="text-xs text-[#E9DFFF] font-normal uppercase tracking-wider mb-0.5">Próximo</span>
              <span className="text-sm truncate max-w-[150px] sm:max-w-[200px]">{nextTitle}</span>
            </span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        )}
      </div>
    </div>
  );
}
