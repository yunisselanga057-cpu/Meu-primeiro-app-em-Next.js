'use client'
export default function Home(){
  const produtos =[
    {id:1,nome:'Computador',preco:25000,emoji:'💻'},
    {id:2,nome:'Teclado', preco:2500,emoji:'⌨️'},
    {id:3,nome:'Mouse',preco:1300,emoji:'🖱️'},
    {id:4,nome:'Monitor', preco:1900,emoji:'🖥️'}]
    return(
      <div className="min-h-screen p-8 bg-gray-300">
        <div className="max-w-6xl bg-white p-8 mx-auto ">
          <header className="mb-4">
            <h1 className="font-bold text-gray-800 text-3xl"> Nossos Produtos</h1>
            <p className="text-gray-600 mt-2 text-1xl">Confira os nossos produtos</p>
             
          </header>
          <section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {produtos.map((produto=>(
                <article  key={produto.id} className="rounded-lg
                 shadow 
                hover:shadow-xl
                  transition-shadow p-6">
                  <div className="text-center mb-4 text-6xl">
                    {produto.emoji}
                  </div>
                  <h2 className="text-gray-600 text-3xl font-bold mb-2">
                    {produto.nome}
                  </h2>
                  <div className="flex justify-between items-center">
                      <p className="text-2xl font-bold text-green-600">
                        {produto.preco} MT
                      </p>
                      <button className="bg-blue-500 text-white px-4 py-2
                      rounded hover:bg-blue-700 transition-colors">
                        Comprar
                      </button>
                  </div>
                  
                </article>
              )))}
            </div>
          </section>
        </div>
      </div>
    )
}