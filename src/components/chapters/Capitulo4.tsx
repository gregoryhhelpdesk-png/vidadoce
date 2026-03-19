import { motion } from 'motion/react';
import { ScriptBox } from '../ui/ScriptBox';
import { SummaryBox } from '../ui/SummaryBox';
import { ActionBox } from '../ui/ActionBox';

export function Capitulo4() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="prose prose-lg prose-slate max-w-none"
    >
      <span className="text-[#7B3FE4] font-semibold tracking-wider uppercase text-sm">Capítulo 4</span>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-8">
        Como fazer sua primeira venda
      </h1>

      <p>
        Você fez o doce. Ele está lindo e cheiroso. E agora? O maior erro das iniciantes é ter vergonha de oferecer.
      </p>

      <p>
        Sua primeira venda não será para um desconhecido na rua. Será para as pessoas que já confiam em você: família, amigos, vizinhos e colegas de trabalho.
      </p>

      <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6">O Poder do WhatsApp</h2>
      
      <p>
        O WhatsApp é a sua vitrine gratuita. Use o Status e as mensagens diretas, mas sem ser chata.
      </p>

      <ScriptBox title="Script 1: Abordagem Direta (Amigos e Família)">
        Oi [Nome]! Tudo bem? Passando para dar uma novidade gostosa: comecei a fazer brigadeiros artesanais para vender! Fiz uma fornada fresquinha hoje. Estou vendendo a caixinha com 4 por R$ X. Quer garantir a sua para a sobremesa de hoje? Beijos!
      </ScriptBox>

      <ScriptBox title="Script 2: O Status Magnético">
        (Poste uma foto bem de perto do doce, mostrando a textura)
        <br/><br/>
        "Aquele docinho que salva a tarde! 🤤 Produção fresquinha de hoje. Tenho apenas X caixinhas disponíveis. Responde aqui quem vai querer!"
      </ScriptBox>

      <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6">A Estratégia da "Amostra Grátis Estratégica"</h2>
      
      <p>
        Se você trabalha fora, leve uma caixa com seus doces. Ofereça um (apenas um) para aquele colega que sempre compra doces. Diga: "Fiz essa receita nova, prova e me diz se está bom". 
      </p>
      <p>
        Quando ele elogiar, você diz: "Que bom que gostou! Trouxe alguns para vender hoje, custa R$ X. Quer ficar com um para depois do almoço?"
      </p>

      <SummaryBox>
        <ul className="m-0 space-y-2">
          <li>• Comece vendendo para quem já te conhece.</li>
          <li>• Use o WhatsApp a seu favor, com fotos reais e apetitosas.</li>
          <li>• Não tenha vergonha. Você está oferecendo alegria em forma de doce, não pedindo um favor.</li>
        </ul>
      </SummaryBox>

      <ActionBox title="Sua Primeira Oferta">
        <p>
          Tire uma foto bonita do seu doce (perto de uma janela, com luz natural). Escolha 5 pessoas no seu WhatsApp e mande o Script 1. Apenas faça.
        </p>
      </ActionBox>
    </motion.div>
  );
}
