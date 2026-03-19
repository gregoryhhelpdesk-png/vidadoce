import { ReactNode } from 'react';
import { Capa } from '@/components/chapters/Capa';
import { Introducao } from '@/components/chapters/Introducao';
import { Capitulo1 } from '@/components/chapters/Capitulo1';
import { Capitulo2 } from '@/components/chapters/Capitulo2';
import { Capitulo3 } from '@/components/chapters/Capitulo3';
import { Capitulo4 } from '@/components/chapters/Capitulo4';
import { Capitulo5 } from '@/components/chapters/Capitulo5';
import { Capitulo6 } from '@/components/chapters/Capitulo6';
import { Bonus } from '@/components/chapters/Bonus';
import { Encerramento } from '@/components/chapters/Encerramento';

export interface Chapter {
  id: string;
  title: string;
  component: ReactNode;
}

export const chapters: Chapter[] = [
  { id: 'capa', title: 'Boas-vindas', component: <Capa /> },
  { id: 'introducao', title: 'Introdução', component: <Introducao /> },
  { id: 'capitulo-1', title: 'Capítulo 1: A verdade que ninguém te conta', component: <Capitulo1 /> },
  { id: 'capitulo-2', title: 'Capítulo 2: Os doces que mais vendem', component: <Capitulo2 /> },
  { id: 'capitulo-3', title: 'Capítulo 3: Como começar com pouco dinheiro', component: <Capitulo3 /> },
  { id: 'capitulo-4', title: 'Capítulo 4: Como fazer sua primeira venda', component: <Capitulo4 /> },
  { id: 'capitulo-5', title: 'Capítulo 5: Como divulgar sem gastar', component: <Capitulo5 /> },
  { id: 'capitulo-6', title: 'Capítulo 6: Como transformar isso em renda', component: <Capitulo6 /> },
  { id: 'bonus', title: 'Bônus Exclusivos', component: <Bonus /> },
  { id: 'encerramento', title: 'Encerramento', component: <Encerramento /> },
];
