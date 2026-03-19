import { motion } from 'motion/react';
import { HighlightBox } from '../ui/HighlightBox';
import { SummaryBox } from '../ui/SummaryBox';
import { ActionBox } from '../ui/ActionBox';

export function Capitulo6() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="prose prose-lg prose-slate max-w-none"
    >
      <span className="text-[#7B3FE4] font-semibold tracking-wider uppercase text-sm">Capítulo 6</span>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-8">
        Como transformar isso em renda
      </h1>

      <p>
        Vender um doce é legal. Vender doces todos os dias e ver o dinheiro sobrando no fim do mês é transformar um hobby em um negócio.
      </p>

      <HighlightBox>
        O segredo não é vender muito em um dia, é vender um pouco todos os dias. A constância é a chave do sucesso.
      </HighlightBox>

      <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6">A Matemática Simples do Lucro</h2>
      
      <p>
        Para que o seu negócio cresça, você precisa entender a diferença entre faturamento (o dinheiro que entra) e lucro (o dinheiro que sobra).
      </p>

      <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 my-8 not-prose">
        <h3 className="text-lg font-bold text-slate-800 mb-4">A Regra dos 3 Terços (Simplificada)</h3>
        <p className="text-slate-600 mb-4">
          Quando você vender um doce, divida o dinheiro mentalmente (ou fisicamente) em três partes:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="bg-[#7B3FE4] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
            <div>
              <strong className="text-slate-800">Custo (Reposição):</strong> O dinheiro para comprar mais ingredientes e embalagens. Nunca mexa nesse dinheiro para uso pessoal.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-[#F59E0B] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
            <div>
              <strong className="text-slate-800">Reinvestimento (Crescimento):</strong> Uma pequena parte para comprar uma espátula melhor, forminhas mais bonitas ou testar uma receita nova.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-emerald-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
            <div>
              <strong className="text-slate-800">Seu Lucro (Seu Pagamento):</strong> O dinheiro que você pode usar para pagar uma conta, comprar algo para você ou guardar.
            </div>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6">Fidelização: O Ouro do Negócio</h2>
      
      <p>
        É muito mais fácil (e barato) vender de novo para quem já comprou de você do que encontrar um cliente novo todos os dias.
      </p>

      <ul className="space-y-4 mb-8">
        <li><strong>O Pós-Venda Simples:</strong> Mande uma mensagem no dia seguinte: "Oi [Nome], gostou do doce de ontem? Espero que tenha adoçado seu dia!".</li>
        <li><strong>O Cadastro Básico:</strong> Anote o nome e o WhatsApp de quem comprou. Quando tiver novidades, mande mensagem para eles primeiro.</li>
        <li><strong>A Surpresa:</strong> De vez em quando, mande um docinho a mais de brinde para os melhores clientes. Eles nunca vão esquecer.</li>
      </ul>

      <SummaryBox>
        <ul className="m-0 space-y-2">
          <li>• Separe o dinheiro do custo do seu lucro.</li>
          <li>• Reinvista uma parte para melhorar seu produto aos poucos.</li>
          <li>• Foque em fidelizar os clientes que você já conquistou.</li>
        </ul>
      </SummaryBox>

      <ActionBox title="Seu Controle Simples">
        <p>
          Pegue um caderno. De um lado, anote tudo o que você gastou (ingredientes). Do outro, anote tudo o que você vendeu. Faça isso religiosamente.
        </p>
      </ActionBox>
    </motion.div>
  );
}
