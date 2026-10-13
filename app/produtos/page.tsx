'use client'

import Link from "next/link"

export default function Home(){
    const produtos = [
          { id: 1, nome: 'Notebook', preco: 3000, emoji: '💻' },
          { id: 2, nome: 'Mouse', preco: 50, emoji: '🖱️' },
          { id: 3, nome: 'Teclado', preco: 150, emoji: '⌨️' },
          { id: 4, nome: 'Monitor', preco: 1200, emoji: '🖥️' }
    ]
    return(
        <div className="bg-gray-300 p-8 min-h-screen">
            <div className="mx-auto max-w-md bg-white  p-4">
                <h1 className="text-3xl text-gray-500 font-bold mb-6">
                    Produtos
                </h1>
                <p className="text-1xl text-gray-400 ">Confira nossos produtos</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {produtos.map((produto =>(
                        <Link
                            key={produto.id}
                            href={`/produtos/${produto.id}`}
                            className="bg-white p-6 rounded-lg shadow hover:shadow-xl
                            trasiition-shadow">
                                <div className="text-6xl text-center mb-4">
                                    {produto.emoji}
                                </div>
                                <h2 className="text-2xl font-bold text-center mb-2">
                                    {produto.nome}
                                </h2>
                                <p className="text-xl text-green-600 text-center font-bold">
                                    {produto.preco} MT
                                </p>
                                <p className="text-blue-500 text-center mt-4">
                                    Ver detalhes →
                                </p>
                            </Link>
                    )))}
                </div>
            </div>

        </div>
    )
}