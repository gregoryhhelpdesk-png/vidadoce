import { motion } from 'motion/react';
import { ArrowLeft, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export function ScriptsVenda({ onBack }: { onBack: () => void }) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const scripts = [
    { title: 'Script 1 — Início simples', text: 'Oi! Hoje comecei a fazer doces caseiros 🍫\nFiz algumas unidades e estão disponíveis, quer ver?' },
    { title: 'Script 2 — Oferta direta', text: 'Hoje estou com doces fresquinhos 🍫\nProdução limitada, quer garantir o seu?' },
    { title: 'Script 3 — Escassez', text: 'Últimas unidades de hoje 🍫\nSe quiser, já separo pra você.' },
    { title: 'Script 4 — Prova + desejo', text: 'Acabei de finalizar os doces de hoje 😍\nFicaram lindos e já estou com poucos disponíveis.' },
    { title: 'Script 5 — Reativação', text: 'Oi! Passei pra avisar que hoje tem doces disponíveis 🍫\nQuer ver os sabores?' },
    { title: 'Script 6 — Visualizou e não respondeu', text: 'Vi que você visualizou meus doces 😄\nQuer garantir algum pra hoje?' },
    { title: 'Script 7 — Promoção leve', text: 'Hoje estou com uma condição especial 🍫\nQuer aproveitar?' },
    { title: 'Script 8 — Indicação', text: 'Estou começando a vender doces 🍫\nSe conhecer alguém que gosta, pode indicar 🙏' },
    { title: 'Script 9 — Urgência', text: 'Já estou encerrando a produção de hoje 🍫\nAinda tenho poucas unidades.' },
    { title: 'Script 10 — Fechamento', text: 'Quer que eu já reserve o seu?' },
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto pb-10">
      <button onClick={onBack} className="flex items-center text-sm font-semibold text-[#7B3FE4] hover:text-[#6A32C9] mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar para Bônus Exclusivos
      </button>

      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">10 Scripts de Venda Prontos</h1>
        <p className="text-lg text-slate-600">Mensagens prontas para copiar, adaptar e começar a vender pelo WhatsApp com mais facilidade.</p>
      </div>

      <div className="space-y-6">
        {scripts.map((script, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-3">{script.title}</h3>
            <div className="bg-[#F8FAFC] p-4 rounded-xl border border-slate-100 mb-4">
              <p className="text-slate-700 whitespace-pre-wrap font-medium">{script.text}</p>
            </div>
            <button 
              onClick={() => handleCopy(script.text, index)}
              className="flex items-center text-sm font-semibold text-slate-600 hover:text-[#7B3FE4] transition-colors"
            >
              {copiedIndex === index ? (
                <><Check className="w-4 h-4 mr-2 text-emerald-500" /> <span className="text-emerald-500">Copiado!</span></>
              ) : (
                <><Copy className="w-4 h-4 mr-2" /> Copiar script</>
              )}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
