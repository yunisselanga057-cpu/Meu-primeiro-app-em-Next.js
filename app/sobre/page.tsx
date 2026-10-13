
import Link from "next/link"

export default function Home(){
    return(
       
            <div className="p-8 bg-gray-100 min-h-screen">
            <div className="bg-white p-6 max-w-2xl mx-auto rounded">
                <h1 className="text-4xl font-bold text-green-600 mb-4">
                    Sobre Nós
                </h1>
                <p className="text-gray-700 mb-4">
                    Esta é a página Sobre
                </p>
                <p className="text-gray-700">
                    Aqui voce encontra informacoes sobre nossa empresa.
                </p>
                <div className="flex mt-4">
                     <Link className="bg-green-100
                text-white px-6 py-3 rounded
                hover: bg-green-600" href={"/"}>Voltar para o Inicio</Link>
                </div>
               
            </div>
        </div>
    
   
    )
}