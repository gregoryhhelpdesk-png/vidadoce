import { motion } from 'motion/react';
import { ArrowLeft, Star } from 'lucide-react';
import { HighlightBox } from '../ui/HighlightBox';

export function SaboresCampeoes({ onBack }: { onBack: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto pb-10">
      <button onClick={onBack} className="flex items-center text-sm font-semibold text-[#7B3FE4] hover:text-[#6A32C9] mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar para Bônus Exclusivos
      </button>

      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Lista de Sabores Campeões</h1>
        <p className="text-lg text-slate-600">Os sabores mais fáceis de vender e com melhor aceitação para quem está começando.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
            <span className="text-3xl mr-3">🍫</span> Brigadeiros
          </h2>
          <ul className="space-y-4">
            {['Tradicional', 'Ninho', 'Ninho com Nutella', 'Meio amargo', 'Paçoca'].map((sabor, i) => (
              <li key={i} className="flex items-center text-slate-700 font-medium">
                <div className="w-2 h-2 rounded-full bg-[#7B3FE4] mr-3" />
                {sabor}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
            <span className="text-3xl mr-3">🍰</span> Bolo no pote
          </h2>
          <ul className="space-y-4">
            {['Chocolate', 'Ninho com morango', 'Prestígio', 'Churros', 'Dois amores'].map((sabor, i) => (
              <li key={i} className="flex items-center text-slate-700 font-medium">
                <div className="w-2 h-2 rounded-full bg-[#F59E0B] mr-3" />
                {sabor}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200 mb-8">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
          <Star className="w-6 h-6 text-[#F59E0B] mr-3" />
          Por que esses sabores vendem mais?
        </h3>
        <ul className="space-y-4">
          {[
            'São conhecidos pelo público',
            'Não geram dúvida na hora da compra',
            'Vendem por impulso',
            'Têm boa margem',
            'São fáceis de divulgar'
          ].map((motivo, i) => (
            <li key={i} className="flex items-start text-slate-700">
              <span className="text-emerald-500 font-bold mr-3">✓</span>
              {motivo}
            </li>
          ))}
        </ul>
      </div>

      <HighlightBox>
        <strong>Regra de ouro:</strong> no começo, venda o que já vende. Não tente inovar demais antes de validar.
      </HighlightBox>
    </motion.div>
  );
}
