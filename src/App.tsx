import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { ProgressBar } from '@/components/layout/ProgressBar';
import { ChapterNavigation } from '@/components/layout/ChapterNavigation';
import { chapters } from '@/data/chapters';

export default function App() {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Scroll to top when chapter changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentChapterIndex]);

  const handleNext = () => {
    if (currentChapterIndex < chapters.length - 1) {
      setCurrentChapterIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex((prev) => prev - 1);
    }
  };

  const currentChapter = chapters[currentChapterIndex];
  const progress = (currentChapterIndex / (chapters.length - 1)) * 100;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex">
      <ProgressBar progress={progress} />
      
      <Sidebar 
        chapters={chapters}
        currentChapterIndex={currentChapterIndex}
        onSelectChapter={setCurrentChapterIndex}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <main className="flex-1 flex flex-col min-w-0">
        <Header 
          onOpenSidebar={() => setIsSidebarOpen(true)} 
          title={currentChapter.title}
        />
        
        <div className="flex-1 overflow-x-hidden">
          <div className="max-w-3xl mx-auto px-6 py-12 lg:py-20 w-full">
            {currentChapter.component}
            
            <ChapterNavigation 
              onPrevious={handlePrevious}
              onNext={handleNext}
              hasPrevious={currentChapterIndex > 0}
              hasNext={currentChapterIndex < chapters.length - 1}
              nextTitle={chapters[currentChapterIndex + 1]?.title}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
