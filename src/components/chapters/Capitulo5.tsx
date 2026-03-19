import { motion } from 'motion/react';
import { HighlightBox } from '../ui/HighlightBox';
import { SummaryBox } from '../ui/SummaryBox';
import { ActionBox } from '../ui/ActionBox';

export function Capitulo5() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="prose prose-lg prose-slate max-w-none"
    >
      <span className="text-[#7B3FE4] font-semibold tracking-wider uppercase text-sm">Capítulo 5</span>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-8">
        Como divulgar sem gastar
      </h1>

      <p>
        Você não precisa de anúncios pagos no Facebook ou Instagram para começar a vender. O marketing boca a boca e as redes sociais gratuitas são suas melhores ferramentas.
      </p>

      <HighlightBox>
        A melhor propaganda é um cliente satisfeito indicando o seu doce para um amigo.
      </HighlightBox>

      <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6">Estratégias de Divulgação Gratuita</h2>
      
      <ol className="space-y-6 mb-8">
        <li>
          <strong>Grupos de Bairro e Condomínio:</strong>
          <p className="mt-2 text-slate-600">
            Se você mora em prédio ou condomínio, o grupo de WhatsApp é uma mina de ouro. Poste fotos reais, com um texto amigável e focado na conveniência ("Não precisa sair de casa para comer um doce gostoso hoje").
          </p>
        </li>
        <li>
          <strong>Parcerias Locais:</strong>
          <p className="mt-2 text-slate-600">
            Conhece a dona do salão de beleza do bairro? Deixe algumas caixinhas lá em consignação. Ela ganha uma comissão ou um mimo, e você ganha novos clientes.
          </p>
        </li>
        <li>
          <strong>Instagram Vitrine (Sem Neura):</strong>
          <p className="mt-2 text-slate-600">
            Crie um perfil profissional simples. Não precisa postar todo dia. Poste fotos bonitas dos seus doces, os bastidores da produção (mostrando limpeza e capricho) e depoimentos de clientes.
          </p>
        </li>
        <li>
          <strong>O Poder da Embalagem:</strong>
          <p className="mt-2 text-slate-600">
            Sua embalagem é seu cartão de visitas. Um adesivo simples com seu WhatsApp ou um bilhetinho escrito à mão faz o cliente lembrar de você na próxima vez que tiver vontade de doce.
          </p>
        </li>
      </ol>

      <SummaryBox>
        <ul className="m-0 space-y-2">
          <li>• Explore sua vizinhança e grupos locais.</li>
          <li>• Faça parcerias com pequenos comércios próximos.</li>
          <li>• Use o Instagram como vitrine, não como obrigação diária.</li>
          <li>• A embalagem e o bilhete à mão são o seu marketing mais barato.</li>
        </ul>
      </SummaryBox>

      <ActionBox title="Sua Primeira Parceria">
        <p>
          Pense em um comércio perto da sua casa onde as pessoas costumam passar um tempo (salão, barbearia, loja de roupas). Vá até lá amanhã, leve uma amostra grátis e proponha uma parceria simples.
        </p>
      </ActionBox>
    </motion.div>
  );
}
