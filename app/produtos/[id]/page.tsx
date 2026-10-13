import Link from 'next/link'

/**
 * @param {{ params: Promise<{ id: string }> }} props
 */
export default async function ProdutoDetalhes({ params }) {
  const { id } = await params
  
  const produtos = {
    1: { 
      id: 1, 
      nome: 'Notebook', 
      preco: 3000, 
      emoji: '💻',
      descricao: 'Notebook de alta performance com 16GB RAM e SSD 512GB',
      especificacoes: [
        'Processador Intel Core i7',
        '16GB RAM DDR4',
        'SSD 512GB',
        'Tela 15.6" Full HD'
      ]
    },
    2: { 
      id: 2, 
      nome: 'Mouse', 
      preco: 50, 
      emoji: '🖱️',
      descricao: 'Mouse ergonômico sem fio com 6 botões programáveis',
      especificacoes: [
        'Conexão Bluetooth',
        '6 botões programáveis',
        'DPI ajustável até 3200',
        'Bateria de longa duração'
      ]
    },
    3: { 
      id: 3, 
      nome: 'Teclado', 
      preco: 150, 
      emoji: '⌨️',
      descricao: 'Teclado mecânico RGB com switches Blue',
      especificacoes: [
        'Switches mecânicos Blue',
        'Iluminação RGB',
        'Anti-ghosting',
        'Cabo USB removível'
      ]
    },
    4: { 
      id: 4, 
      nome: 'Monitor', 
      preco: 1200, 
      emoji: '🖥️',
      descricao: 'Monitor 27" 4K com taxa de atualização de 144Hz',
      especificacoes: [
        'Tela 27" 4K UHD',
        '144Hz de taxa de atualização',
        'Tecnologia IPS',
        'HDR10'
      ]
    }
  }
  
  const produto = produtos[id]
  
  if (!produto) {
    return (
      <div className="p-8 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Produto não encontrado</h1>
          <Link 
            href="/produtos"
            className="text-blue-500 hover:underline"
          >
            ← Voltar para produtos
          </Link>
        </div>
      </div>
    )
  }
  
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/produtos"
          className="text-blue-500 hover:underline mb-6 inline-block"
        >
          ← Voltar para produtos
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-9xl text-center mb-6">
            {produto.emoji}
          </div>
          
          <h1 className="text-4xl font-bold text-center mb-4">
            {produto.nome}
          </h1>
          
          <p className="text-3xl text-green-600 text-center font-bold mb-8">
            {produto.preco} MT
          </p>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Descrição</h2>
            <p className="text-gray-700 text-lg">
              {produto.descricao}
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Especificações</h2>
            <ul className="space-y-2">
              {produto.especificacoes.map((spec, index) => (
                <li 
                  key={index}
                  className="flex items-center text-gray-700"
                >
                  <span className="text-green-500 mr-2">✓</span>
                  {spec}
                </li>
              ))}
            </ul>
          </div>
          
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-lg text-xl font-bold transition-colors">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  )
}