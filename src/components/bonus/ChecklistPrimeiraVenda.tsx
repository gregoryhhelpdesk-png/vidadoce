import { motion } from 'motion/react';
import { ArrowLeft, CheckSquare } from 'lucide-react';
import { HighlightBox } from '../ui/HighlightBox';

export function ChecklistPrimeiraVenda({ onBack }: { onBack: () => void }) {
  const secoes = [
    {
      titulo: '1. Preparação',
      itens: ['Escolher 2 doces', 'Comprar ingredientes', 'Separar embalagens', 'Organizar a produção']
    },
    {
      titulo: '2. Apresentação',
      itens: ['Tirar boas fotos', 'Usar iluminação clara', 'Mostrar os doces prontos', 'Separar sabores e quantidades']
    },
    {
      titulo: '3. Divulgação',
      itens: ['Postar no status', 'Enviar mensagem para contatos', 'Responder rapidamente', 'Criar sensação de oportunidade']
    },
    {
      titulo: '4. Fechamento',
      itens: ['Confirmar pedido', 'Combinar pagamento', 'Definir entrega ou retirada', 'Finalizar com atenção e simpatia']
    }
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto pb-10">
      <button onClick={onBack} className="flex items-center text-sm font-semibold text-[#7B3FE4] hover:text-[#6A32C9] mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar para Bônus Exclusivos
      </button>

      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Checklist da Primeira Venda</h1>
        <p className="text-lg text-slate-600">Um passo a passo simples para não esquecer nada antes de vender seus primeiros doces.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {secoes.map((secao, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#7B3FE4] mb-5">{secao.titulo}</h3>
            <ul className="space-y-4">
              {secao.itens.map((item, i) => (
                <li key={i} className="flex items-start text-slate-700">
                  <CheckSquare className="w-5 h-5 text-slate-300 mr-3 shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <HighlightBox>
        <strong>Feito é melhor que perfeito.</strong> Sua primeira venda não precisa ser impecável. Precisa acontecer.
      </HighlightBox>
    </motion.div>
  );
}
