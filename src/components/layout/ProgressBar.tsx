interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="fixed top-0 left-0 lg:left-72 right-0 h-1 bg-slate-100 z-40">
      <div 
        className="h-full bg-gradient-to-r from-[#7B3FE4] to-[#F59E0B] transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
