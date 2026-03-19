import { Chapter } from '@/data/chapters';
import { ChevronRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  chapters: Chapter[];
  currentChapterIndex: number;
  onSelectChapter: (index: number) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function Sidebar({ chapters, currentChapterIndex, onSelectChapter, isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed lg:sticky top-0 left-0 h-[100dvh] w-72 bg-white border-r border-slate-100 shadow-sm z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h1 className="font-bold text-[#7B3FE4] text-xl leading-tight">Vida Doce</h1>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-widest mt-1">com propósito</p>
          </div>
          <button 
            className="lg:hidden text-slate-400 hover:text-slate-600"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1 scrollbar-hide">
          {chapters.map((chapter, index) => {
            const isActive = index === currentChapterIndex;
            const isPast = index < currentChapterIndex;
            
            return (
              <button
                key={chapter.id}
                onClick={() => {
                  onSelectChapter(index);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center text-left px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive 
                    ? 'bg-[#F3EFFF] text-[#7B3FE4] font-semibold' 
                    : isPast
                      ? 'text-slate-600 hover:bg-slate-50'
                      : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
                }`}
              >
                <span className="flex-1 text-sm leading-snug">{chapter.title}</span>
                {isActive && <ChevronRight className="w-4 h-4 text-[#7B3FE4] ml-2" />}
              </button>
            );
          })}
        </div>
        
        <div className="p-6 border-t border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7B3FE4] to-[#F59E0B] flex items-center justify-center text-white font-bold text-sm shadow-sm">
              VD
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">Seu Progresso</p>
              <p className="text-xs text-slate-500">{Math.round((currentChapterIndex / (chapters.length - 1)) * 100)}% concluído</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
