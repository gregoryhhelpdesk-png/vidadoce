import { motion } from 'motion/react';
import { ArrowLeft, Calculator, DollarSign, TrendingUp, AlertCircle, CheckCircle2, PieChart } from 'lucide-react';
import { useState } from 'react';

export function CalculadoraLucro({ onBack }: { onBack: () => void }) {
  const [custoTotal, setCustoTotal] = useState<string>('');
  const [qtdProduzida, setQtdProduzida] = useState<string>('');
  const [precoVenda, setPrecoVenda] = useState<string>('');
  const [qtdVendida, setQtdVendida] = useState<string>('');

  // Parse values
  const custo = parseFloat(custoTotal.replace(',', '.')) || 0;
  const produzida = parseInt(qtdProduzida) || 0;
  const preco = parseFloat(precoVenda.replace(',', '.')) || 0;
  const vendida = parseInt(qtdVendida) || 0;

  // Calculations
  const custoUnitario = produzida > 0 ? custo / produzida : 0;
  const receita = preco * vendida;
  const custoVendido = custoUnitario * vendida;
  const lucro = receita - custoVendido;
  const reinvestimento = lucro > 0 ? lucro * 0.5 : 0;

  const margem = receita > 0 ? lucro / receita : 0;
  const isLucroBaixo = margem < 0.3 && vendida > 0;
  const isLucroBom = margem >= 0.3 && vendida > 0;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto pb-10">
      <button onClick={onBack} className="flex items-center text-sm font-semibold text-[#7B3FE4] hover:text-[#6A32C9] mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Voltar para Bônus Exclusivos
      </button>

      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 flex items-center">
          <Calculator className="w-8 h-8 text-[#7B3FE4] mr-3" />
          Calculadora de Lucro
        </h1>
        <p className="text-lg text-slate-600">
          Descubra exatamente quanto você está gastando, ganhando e quanto deve separar para crescer seu negócio.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Formulário */}
        <div className="lg:col-span-5 space-y-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-3">Preencha os dados</h3>
          
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Custo total dos ingredientes (R$)</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">R$</span>
              <input 
                type="number" 
                value={custoTotal}
                onChange={(e) => setCustoTotal(e.target.value)}
                placeholder="Ex: 40.00"
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7B3FE4] focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Quantidade produzida (unidades)</label>
            <input 
              type="number" 
              value={qtdProduzida}
              onChange={(e) => setQtdProduzida(e.target.value)}
              placeholder="Ex: 20"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7B3FE4] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Preço de venda por unidade (R$)</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">R$</span>
              <input 
                type="number" 
                value={precoVenda}
                onChange={(e) => setPrecoVenda(e.target.value)}
                placeholder="Ex: 5.00"
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7B3FE4] focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Quantidade vendida (unidades)</label>
            <input 
              type="number" 
              value={qtdVendida}
              onChange={(e) => setQtdVendida(e.target.value)}
              placeholder="Ex: 20"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7B3FE4] focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Resultados */}
        <div className="lg:col-span-7 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center text-slate-500 mb-2">
                <PieChart className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Custo por unidade</span>
              </div>
              <div className="text-2xl font-bold text-slate-800">{formatCurrency(custoUnitario)}</div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center text-slate-500 mb-2">
                <DollarSign className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Receita total</span>
              </div>
              <div className="text-2xl font-bold text-slate-800">{formatCurrency(receita)}</div>
            </div>

            <div className={`p-5 rounded-2xl border shadow-sm ${lucro > 0 ? 'bg-emerald-50 border-emerald-100' : 'bg-white border-slate-200'}`}>
              <div className={`flex items-center mb-2 ${lucro > 0 ? 'text-emerald-600' : 'text-slate-500'}`}>
                <TrendingUp className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Lucro total</span>
              </div>
              <div className={`text-3xl font-bold ${lucro > 0 ? 'text-emerald-700' : 'text-slate-800'}`}>
                {formatCurrency(lucro)}
              </div>
            </div>

            <div className="bg-[#F3EFFF] p-5 rounded-2xl border border-[#E9D5FF] shadow-sm">
              <div className="flex items-center text-[#7B3FE4] mb-2">
                <TrendingUp className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Reinvestimento sugerido</span>
              </div>
              <div className="text-2xl font-bold text-[#6A32C9]">{formatCurrency(reinvestimento)}</div>
            </div>
          </div>

          {/* Feedback */}
          {vendida > 0 && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }}
              className={`p-4 rounded-xl flex items-start border ${
                isLucroBom 
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
                  : 'bg-amber-50 border-amber-200 text-amber-800'
              }`}
            >
              {isLucroBom ? (
                <CheckCircle2 className="w-5 h-5 mr-3 shrink-0 mt-0.5 text-emerald-600" />
              ) : (
                <AlertCircle className="w-5 h-5 mr-3 shrink-0 mt-0.5 text-amber-600" />
              )}
              <div>
                <strong className="block font-bold mb-1">
                  {isLucroBom ? 'Excelente!' : 'Atenção!'}
                </strong>
                <p className="text-sm">
                  {isLucroBom 
                    ? 'Seu preço está saudável e deixando uma boa margem de lucro.' 
                    : 'Seu lucro está baixo, considere revisar seu preço de venda ou reduzir custos.'}
                </p>
              </div>
            </motion.div>
          )}

          {/* Explicações */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-4">Entenda os números:</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start">
                <strong className="text-slate-800 w-32 shrink-0">Custo:</strong> 
                <span>Quanto você gastou para produzir os doces vendidos.</span>
              </li>
              <li className="flex items-start">
                <strong className="text-slate-800 w-32 shrink-0">Receita:</strong> 
                <span>Todo o dinheiro que entrou com as vendas.</span>
              </li>
              <li className="flex items-start">
                <strong className="text-slate-800 w-32 shrink-0">Lucro:</strong> 
                <span>O que sobrou limpo no seu bolso após pagar os custos.</span>
              </li>
              <li className="flex items-start">
                <strong className="text-slate-800 w-32 shrink-0">Reinvestimento:</strong> 
                <span>Metade do seu lucro. Use para comprar mais ingredientes ou melhorar embalagens.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
