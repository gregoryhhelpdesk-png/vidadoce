import { motion } from 'motion/react';
import { HighlightBox } from '../ui/HighlightBox';
import { SummaryBox } from '../ui/SummaryBox';
import { ActionBox } from '../ui/ActionBox';

export function Capitulo1() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="prose prose-lg prose-slate max-w-none"
    >
      <span className="text-[#7B3FE4] font-semibold tracking-wider uppercase text-sm">Capítulo 1</span>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-8">
        A verdade que ninguém te conta
      </h1>

      <p>
        A internet está cheia de bolos perfeitos, decorações impossíveis e cozinhas que parecem cenários de novela. Isso é lindo, mas pode ser paralisante.
      </p>

      <p>
        A maior mentira que te contaram é que você precisa ser uma confeiteira profissional para ganhar dinheiro com doces.
      </p>

      <HighlightBox>
        O simples vende. O bem feito vende. O feito com carinho vende todos os dias.
      </HighlightBox>

      <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6">O Mito do Momento Perfeito</h2>
      
      <p>
        Muitas mulheres adiam seus sonhos esperando:
      </p>
      
      <ul className="space-y-3 mb-8">
        <li>Ter a batedeira planetária de última geração.</li>
        <li>Fazer aquele curso caríssimo de confeitaria francesa.</li>
        <li>Ter embalagens personalizadas com logo dourado.</li>
      </ul>

      <p>
        Sabe o que acontece enquanto você espera o momento perfeito? <strong>Alguém está vendendo o brigadeiro simples que você já sabe fazer.</strong>
      </p>

      <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm my-10">
        <h3 className="text-xl font-bold text-[#F59E0B] mb-4">Ação vale mais que perfeição</h3>
        <p className="text-slate-600 m-0">
          Seu primeiro doce não será o mais bonito. Sua primeira embalagem será simples. E está tudo bem. O importante é dar o primeiro passo. A melhoria vem com a prática, não com a espera.
        </p>
      </div>

      <SummaryBox>
        <ul className="m-0 space-y-2">
          <li>• Você não precisa ser profissional para começar.</li>
          <li>• O momento perfeito não existe, crie-o agora.</li>
          <li>• O simples, quando bem feito, tem alto valor e vende muito.</li>
        </ul>
      </SummaryBox>

      <ActionBox title="Exercício de Desapego">
        <p>
          Escreva em um papel: "Eu me permito começar pequeno. Eu me permito aprender no caminho." Cole isso na porta da sua geladeira hoje mesmo.
        </p>
      </ActionBox>
    </motion.div>
  );
}
