
import Link from "next/link"

export default function Home(){
    return(
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="bg-white p-6 max-w-2xl mx-auto rounded">
                <h1 className="text-4xl font-bold text-purple-600 mb-4">
                    Contacto
                </h1>
                <p className="text-gray-700 mb-6">
                    Entre em contacto connosco!
                </p>
                <div className="space-y-2">
                    <p>Email: contacto@empresa.com</p>
                    <p>Telefone : 84 200 82 38</p>
                </div>
            </div>
        </div>
    )
}