import { motion } from 'motion/react';
import { HighlightBox } from '../ui/HighlightBox';
import { SummaryBox } from '../ui/SummaryBox';
import { ActionBox } from '../ui/ActionBox';

export function Capitulo3() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="prose prose-lg prose-slate max-w-none"
    >
      <span className="text-[#7B3FE4] font-semibold tracking-wider uppercase text-sm">Capítulo 3</span>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-8">
        Como começar com pouco dinheiro
      </h1>

      <p>
        A falta de dinheiro é a desculpa número um para não começar. Mas a verdade é que você pode iniciar seu negócio de doces com o valor de uma pizza.
      </p>

      <HighlightBox>
        O segredo não é ter muito dinheiro para investir, é saber investir o pouco que você tem com inteligência.
      </HighlightBox>

      <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6">A Regra do Mínimo Viável</h2>
      
      <p>
        Compre apenas o estritamente necessário para a sua primeira fornada. Se você escolheu fazer brigadeiros, sua lista de compras deve ser:
      </p>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 my-8 not-prose shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="bg-[#F59E0B] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">R$</span>
          Investimento Inicial Sugerido (Exemplo: Brigadeiro)
        </h3>
        <ul className="space-y-3 text-slate-600">
          <li className="flex justify-between items-center border-b border-slate-100 pb-2">
            <span>2 latas de leite condensado</span>
            <span className="font-medium">~ R$ 12,00</span>
          </li>
          <li className="flex justify-between items-center border-b border-slate-100 pb-2">
            <span>1 caixa de creme de leite</span>
            <span className="font-medium">~ R$ 4,00</span>
          </li>
          <li className="flex justify-between items-center border-b border-slate-100 pb-2">
            <span>Cacau em pó ou achocolatado bom</span>
            <span className="font-medium">~ R$ 8,00</span>
          </li>
          <li className="flex justify-between items-center border-b border-slate-100 pb-2">
            <span>Granulado</span>
            <span className="font-medium">~ R$ 5,00</span>
          </li>
          <li className="flex justify-between items-center border-b border-slate-100 pb-2">
            <span>Forminhas simples (nº 4 ou 5)</span>
            <span className="font-medium">~ R$ 3,00</span>
          </li>
          <li className="flex justify-between items-center pt-2 font-bold text-[#7B3FE4]">
            <span>Total Estimado</span>
            <span>~ R$ 32,00</span>
          </li>
        </ul>
        <p className="text-xs text-slate-400 mt-4 italic">* Valores aproximados, variam por região.</p>
      </div>

      <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6">Onde NÃO gastar no início</h2>
      
      <ul className="space-y-4 mb-8">
        <li><strong>❌ Embalagens personalizadas:</strong> Use embalagens transparentes simples. O que importa no início é o sabor e a higiene.</li>
        <li><strong>❌ Adesivos caros:</strong> Compre etiquetas simples em papelaria e escreva à mão com carinho.</li>
        <li><strong>❌ Estoque grande:</strong> Compre apenas para a produção da semana. Não imobilize seu pouco dinheiro.</li>
      </ul>

      <SummaryBox>
        <p className="m-0">
          Comece com o mínimo. Venda a primeira leva. Pegue o dinheiro, separe o custo, guarde um pouco do lucro e reinvista o resto. É assim que a roda gira.
        </p>
      </SummaryBox>

      <ActionBox title="Sua Lista Enxuta">
        <p>
          Faça a lista de compras APENAS para o doce que você escolheu no capítulo anterior. Calcule quanto você precisa para fazer a primeira receita.
        </p>
      </ActionBox>
    </motion.div>
  );
}
