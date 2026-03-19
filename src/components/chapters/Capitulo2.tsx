import { motion } from 'motion/react';
import { Card } from '../ui/Card';
import { SummaryBox } from '../ui/SummaryBox';
import { ActionBox } from '../ui/ActionBox';

export function Capitulo2() {
  const doces = [
    {
      nome: 'Brigadeiro Tradicional',
      motivo: 'O rei das vendas. Todo mundo ama, os ingredientes são fáceis de achar e a margem de lucro é excelente.',
      icone: '🍫'
    },
    {
      nome: 'Bolo no Pote',
      motivo: 'Sensação de sobremesa completa. Permite aproveitar sobras de bolo e tem alto valor percebido.',
      icone: '🍰'
    },
    {
      nome: 'Palha Italiana',
      motivo: 'Rende muito, é fácil de fazer, não precisa de forminhas caras e tem uma validade ótima.',
      icone: '🍪'
    },
    {
      nome: 'Trufas Simples',
      motivo: 'Parecem presentes. Com uma embalagem simples, você pode cobrar um valor muito bom.',
      icone: '🍬'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="prose prose-lg prose-slate max-w-none"
    >
      <span className="text-[#7B3FE4] font-semibold tracking-wider uppercase text-sm">Capítulo 2</span>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-8">
        Os doces que mais vendem
      </h1>

      <p>
        Para começar a ganhar dinheiro rápido, você não deve inventar moda. Você deve focar no que as pessoas já conhecem, amam e compram por impulso.
      </p>

      <p>
        Aqui estão os campeões de vendas para quem está começando:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 not-prose">
        {doces.map((doce, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">{doce.icone}</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">{doce.nome}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{doce.motivo}</p>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6">Por que escolher esses doces?</h2>
      
      <p>
        Eles compartilham três características fundamentais para quem está começando:
      </p>

      <ol className="space-y-4 mb-8">
        <li><strong>Baixo custo de produção:</strong> Você não precisa de muito dinheiro para comprar os ingredientes.</li>
        <li><strong>Alta aceitação:</strong> Você não precisa explicar o que é um brigadeiro. A venda é quase automática.</li>
        <li><strong>Praticidade:</strong> Não exigem equipamentos complexos ou técnicas avançadas.</li>
      </ol>

      <SummaryBox>
        <p className="m-0">
          Foque no básico bem feito. Escolha apenas <strong>um ou dois</strong> tipos de doces para começar. Não tente abraçar o mundo oferecendo um cardápio gigante logo no primeiro dia.
        </p>
      </SummaryBox>

      <ActionBox title="Sua Escolha">
        <p>
          Olhe para a lista acima. Qual desses doces você se sente mais confortável em fazer hoje? Escolha apenas UM para ser o seu produto inicial.
        </p>
      </ActionBox>
    </motion.div>
  );
}
