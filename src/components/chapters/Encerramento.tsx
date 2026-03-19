import { motion } from 'motion/react';
import { HighlightBox } from '../ui/HighlightBox';
import { Button } from '../ui/Button';
import { Sparkles } from 'lucide-react';

export function Encerramento() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="prose prose-lg prose-slate max-w-none"
    >
      <div className="flex justify-center mb-8">
        <div className="p-4 bg-[#FFF9F0] rounded-full">
          <Sparkles className="w-10 h-10 text-[#F59E0B]" />
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-8">
        Sua jornada está apenas começando
      </h1>

      <p className="text-center text-xl text-slate-600 mb-12">
        Você chegou ao fim deste guia, mas este é apenas o primeiro passo da sua nova história.
      </p>

      <HighlightBox>
        Lembre-se: grandes negócios começaram em cozinhas pequenas, com batedeiras simples e muita vontade de fazer dar certo.
      </HighlightBox>

      <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6 text-center">Resumo da sua jornada</h2>
      
      <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm my-8 not-prose">
        <ol className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          <li className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#7B3FE4] text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              1
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-slate-50 shadow-sm">
              <h3 className="font-bold text-slate-800 text-sm mb-1">Decisão</h3>
              <p className="text-xs text-slate-600">Você entendeu que o simples vende e que a perfeição é inimiga da ação.</p>
            </div>
          </li>
          <li className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#F59E0B] text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              2
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-slate-50 shadow-sm">
              <h3 className="font-bold text-slate-800 text-sm mb-1">Ação</h3>
              <p className="text-xs text-slate-600">Você escolheu seu produto inicial e fez sua primeira lista enxuta.</p>
            </div>
          </li>
          <li className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-emerald-500 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              3
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-slate-50 shadow-sm">
              <h3 className="font-bold text-slate-800 text-sm mb-1">Venda</h3>
              <p className="text-xs text-slate-600">Você aprendeu a oferecer sem vergonha e a fidelizar seus clientes.</p>
            </div>
          </li>
        </ol>
      </div>

      <p className="text-center font-medium text-slate-700 mt-12 mb-16">
        Agora é com você. Vá para a cozinha, coloque uma música que você gosta, lave as mãos e comece. O mundo está esperando para provar o seu talento.
      </p>

      <div className="bg-gradient-to-br from-[#7B3FE4] to-[#5B21B6] rounded-3xl p-8 text-center text-white not-prose shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Quer dar o próximo passo?</h3>
        <p className="text-[#E9DFFF] mb-8 max-w-md mx-auto">
          Em breve lançaremos um sistema completo e simples para você gerenciar suas encomendas, custos e clientes pelo celular.
        </p>
        <Button variant="secondary" className="w-full sm:w-auto">
          Quero entrar na lista de espera
        </Button>
      </div>
    </motion.div>
  );
}
