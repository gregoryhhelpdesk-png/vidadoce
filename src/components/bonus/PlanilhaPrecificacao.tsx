import { motion } from 'motion/react';
import { ArrowLeft, Calculator } from 'lucide-react';
import { HighlightBox } from '../ui/HighlightBox';

export function PlanilhaPrecificacao({ onBack }: { onBack: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto pb-10">
      <button onClick={onBack} className="flex items-center text-sm font-semibold text-[#7B3FE4] hover:text-[#6A32C9] mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar para Bônus Exclusivos
      </button>

      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Planilha Simples de Precificação</h1>
        <p className="text-lg text-slate-600">Entenda de forma prática quanto custa produzir, por quanto vender e quanto sobra de lucro.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
            <Calculator className="w-6 h-6 text-[#7B3FE4] mr-3" />
            Exemplo prático
          </h3>
          <ul className="space-y-4 text-slate-700">
            <li className="flex justify-between border-b border-slate-50 pb-2">
              <span>Custo total dos ingredientes:</span>
              <strong className="text-slate-900">R$ 40,00</strong>
            </li>
            <li className="flex justify-between border-b border-slate-50 pb-2">
              <span>Quantidade produzida:</span>
              <strong className="text-slate-900">20 doces</strong>
            </li>
            <li className="flex justify-between border-b border-slate-50 pb-2">
              <span>Custo por unidade:</span>
              <strong className="text-slate-900">R$ 2,00</strong>
            </li>
            <li className="flex justify-between border-b border-slate-50 pb-2">
              <span>Preço sugerido de venda:</span>
              <strong className="text-[#7B3FE4]">R$ 4,00 a R$ 5,00</strong>
            </li>
            <li className="flex justify-between pt-2">
              <span>Lucro por unidade:</span>
              <strong className="text-emerald-600">R$ 2,00 a R$ 3,00</strong>
            </li>
          </ul>
        </div>

        <div className="bg-[#FFF9F0] rounded-2xl p-8 border border-[#FDE6C2]">
          <h3 className="text-xl font-bold text-[#925E07] mb-6">Como calcular</h3>
          <ol className="space-y-4 text-[#7A510A] font-medium">
            <li className="flex items-center">
              <span className="w-6 h-6 rounded-full bg-[#F59E0B] text-white flex items-center justify-center text-sm font-bold mr-3 shrink-0">1</span>
              Somar custo de ingredientes
            </li>
            <li className="flex items-center">
              <span className="w-6 h-6 rounded-full bg-[#F59E0B] text-white flex items-center justify-center text-sm font-bold mr-3 shrink-0">2</span>
              Somar custo de embalagem
            </li>
            <li className="flex items-center">
              <span className="w-6 h-6 rounded-full bg-[#F59E0B] text-white flex items-center justify-center text-sm font-bold mr-3 shrink-0">3</span>
              Dividir pela quantidade produzida
            </li>
            <li className="flex items-center">
              <span className="w-6 h-6 rounded-full bg-[#F59E0B] text-white flex items-center justify-center text-sm font-bold mr-3 shrink-0">4</span>
              Definir margem de lucro
            </li>
          </ol>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm mb-12">
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
          <h3 className="font-bold text-slate-800">Modelo Visual</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 text-slate-500 text-sm uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold border-b border-slate-100">Item</th>
                <th className="px-6 py-4 font-semibold border-b border-slate-100 text-right">Valor</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-50 hover:bg-slate-50/50">
                <td className="px-6 py-4">Ingredientes</td>
                <td className="px-6 py-4 text-right font-medium">R$ 40,00</td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50/50">
                <td className="px-6 py-4">Embalagens</td>
                <td className="px-6 py-4 text-right font-medium">R$ 10,00</td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50/50 bg-slate-50/30">
                <td className="px-6 py-4 font-semibold text-slate-900">Custo total</td>
                <td className="px-6 py-4 text-right font-bold text-slate-900">R$ 50,00</td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50/50">
                <td className="px-6 py-4">Quantidade produzida</td>
                <td className="px-6 py-4 text-right font-medium">20</td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50/50">
                <td className="px-6 py-4">Custo por unidade</td>
                <td className="px-6 py-4 text-right font-medium">R$ 2,50</td>
              </tr>
              <tr className="border-b border-slate-50 hover:bg-slate-50/50 bg-[#F3EFFF]/30">
                <td className="px-6 py-4 font-semibold text-[#7B3FE4]">Preço de venda sugerido</td>
                <td className="px-6 py-4 text-right font-bold text-[#7B3FE4]">R$ 5,00</td>
              </tr>
              <tr className="hover:bg-slate-50/50 bg-emerald-50/30">
                <td className="px-6 py-4 font-semibold text-emerald-700">Lucro estimado por unidade</td>
                <td className="px-6 py-4 text-right font-bold text-emerald-700">R$ 2,50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <HighlightBox>
        Você não precisa de uma planilha complexa para começar.<br/>
        Precisa apenas entender três números:
        <ul className="mt-4 mb-0 space-y-1">
          <li>• quanto gastou</li>
          <li>• por quanto vendeu</li>
          <li>• quanto sobrou</li>
        </ul>
      </HighlightBox>
    </motion.div>
  );
}
