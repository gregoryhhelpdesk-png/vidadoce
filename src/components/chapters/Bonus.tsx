import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/Card';
import { Gift, CheckCircle2, MessageSquare, TrendingUp, Calculator } from 'lucide-react';
import { ScriptsVenda } from '../bonus/ScriptsVenda';
import { SaboresCampeoes } from '../bonus/SaboresCampeoes';
import { ChecklistPrimeiraVenda } from '../bonus/ChecklistPrimeiraVenda';
import { PlanilhaPrecificacao } from '../bonus/PlanilhaPrecificacao';
import { CalculadoraLucro } from '../bonus/CalculadoraLucro';

export function Bonus() {
  const [activeBonus, setActiveBonus] = useState<string | null>(null);

  const bonusItems = [
    {
      id: 'scripts-venda',
      icon: MessageSquare,
      title: '10 Scripts de Venda Prontos',
      desc: 'Mensagens testadas para WhatsApp, Instagram e abordagens diretas. É só copiar, colar e adaptar.',
      color: 'text-blue-500',
      bg: 'bg-blue-50'
    },
    {
      id: 'sabores-campeoes',
      icon: TrendingUp,
      title: 'Lista de Sabores Campeões',
      desc: 'Os 5 sabores de brigadeiro e bolo no pote que mais vendem e têm a melhor margem de lucro.',
      color: 'text-emerald-500',
      bg: 'bg-emerald-50'
    },
    {
      id: 'checklist-primeira-venda',
      icon: CheckCircle2,
      title: 'Checklist da Primeira Venda',
      desc: 'Um passo a passo visual para você não esquecer de nada antes de entregar sua primeira encomenda.',
      color: 'text-[#7B3FE4]',
      bg: 'bg-[#F3EFFF]'
    },
    {
      id: 'planilha-precificacao',
      icon: Gift,
      title: 'Planilha Simples de Precificação',
      desc: 'Um modelo visual para você anotar seus custos e saber exatamente por quanto vender cada doce.',
      color: 'text-[#F59E0B]',
      bg: 'bg-[#FFF9F0]'
    },
    {
      id: 'calculadora-lucro',
      icon: Calculator,
      title: 'Calculadora de Lucro para Doces',
      desc: 'Ferramenta interativa para descobrir quanto você gasta, ganha e deve reinvestir.',
      color: 'text-rose-500',
      bg: 'bg-rose-50'
    }
  ];

  if (activeBonus === 'scripts-venda') return <ScriptsVenda onBack={() => setActiveBonus(null)} />;
  if (activeBonus === 'sabores-campeoes') return <SaboresCampeoes onBack={() => setActiveBonus(null)} />;
  if (activeBonus === 'checklist-primeira-venda') return <ChecklistPrimeiraVenda onBack={() => setActiveBonus(null)} />;
  if (activeBonus === 'planilha-precificacao') return <PlanilhaPrecificacao onBack={() => setActiveBonus(null)} />;
  if (activeBonus === 'calculadora-lucro') return <CalculadoraLucro onBack={() => setActiveBonus(null)} />;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="prose prose-lg prose-slate max-w-none"
    >
      <div className="flex items-center gap-3 mb-8">
        <Gift className="w-8 h-8 text-[#F59E0B]" />
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 m-0">
          Bônus Exclusivos
        </h1>
      </div>

      <p className="lead text-xl text-slate-600 mb-12">
        Para acelerar ainda mais os seus resultados, preparamos estes materiais complementares práticos.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
        {bonusItems.map((item) => (
          <Card key={item.id} className="hover:shadow-md transition-shadow relative overflow-hidden group cursor-pointer" onClick={() => setActiveBonus(item.id)}>
            <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-50 transition-transform group-hover:scale-110 ${item.bg}`} />
            <div className="relative z-10">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.bg}`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.desc}</p>
              <button className="text-sm font-semibold text-[#7B3FE4] hover:text-[#6A32C9] flex items-center gap-1">
                Acessar material <span className="text-lg leading-none">→</span>
              </button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center">
        <p className="text-slate-600 text-sm m-0">
          * Os materiais bônus estão disponíveis para download na área de membros ou através do link enviado para o seu e-mail.
        </p>
      </div>
    </motion.div>
  );
}
