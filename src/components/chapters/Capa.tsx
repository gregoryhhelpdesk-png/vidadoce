import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { Heart, Star } from 'lucide-react';

export function Capa() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 py-12"
    >
      <div className="mb-8 inline-flex items-center justify-center p-4 bg-[#F3EFFF] rounded-full">
        <Heart className="w-12 h-12 text-[#7B3FE4] fill-[#7B3FE4]/20" />
      </div>
      
      <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
        Vida Doce <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B3FE4] to-[#F59E0B]">
          com Propósito
        </span>
      </h1>
      
      <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
        Como transformar sua cozinha em uma fonte de renda com doces simples, mesmo começando do zero.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
        {[
          { icon: Star, text: 'Passo a passo prático' },
          { icon: Heart, text: 'Feito com amor' },
          { icon: Star, text: 'Resultados reais' },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
            <item.icon className="w-6 h-6 text-[#F59E0B] mb-3" />
            <span className="text-sm font-semibold text-slate-700">{item.text}</span>
          </div>
        ))}
      </div>

      <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">
        Deslize ou clique em "Próximo" para começar
      </p>
    </motion.div>
  );
}
