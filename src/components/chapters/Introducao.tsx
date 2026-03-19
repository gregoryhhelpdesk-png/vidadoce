import { motion } from 'motion/react';
import { HighlightBox } from '../ui/HighlightBox';
import { ActionBox } from '../ui/ActionBox';

export function Introducao() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="prose prose-lg prose-slate max-w-none"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
        Bem-vinda à sua nova jornada
      </h1>

      <p className="lead text-xl text-slate-600 mb-8">
        Se você está lendo isso, é porque sente que pode mais. Talvez você queira uma renda extra, talvez queira estar mais perto dos seus filhos, ou talvez apenas queira provar a si mesma que é capaz de construir algo seu.
      </p>

      <p>
        Este material não é apenas um livro de receitas. É um mapa. Um guia prático, direto e sem enrolação para você pegar os ingredientes que já tem na despensa e transformá-los em dinheiro no bolso.
      </p>

      <HighlightBox author="Vida Doce com Propósito">
        O sucesso não é sobre ter a cozinha mais equipada ou os ingredientes mais caros. É sobre começar com o que você tem, onde você está.
      </HighlightBox>

      <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6">Para quem é este conteúdo?</h2>
      
      <ul className="space-y-4 mb-12">
        <li className="flex items-start">
          <span className="text-[#7B3FE4] mr-3 font-bold">✓</span>
          <span>Para quem nunca vendeu um doce na vida.</span>
        </li>
        <li className="flex items-start">
          <span className="text-[#7B3FE4] mr-3 font-bold">✓</span>
          <span>Para quem tem pouco dinheiro para investir.</span>
        </li>
        <li className="flex items-start">
          <span className="text-[#7B3FE4] mr-3 font-bold">✓</span>
          <span>Para quem quer resultados rápidos e práticos.</span>
        </li>
      </ul>

      <ActionBox title="Seu primeiro passo">
        <p>
          Pegue um caderno e uma caneta. Este material é prático. Ao final de cada capítulo, você terá uma pequena tarefa. Não pule etapas. A magia acontece na execução.
        </p>
      </ActionBox>
    </motion.div>
  );
}
