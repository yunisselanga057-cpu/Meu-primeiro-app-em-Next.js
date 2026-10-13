'use client'
import Link from "next/link"
export default function Home(){
    return(
        <header className="bg-blue-600 text-white">
            <nav className="p-4">
                <div className="max-w-4xl mx-auto flex gap-6">
                    <Link href={"/"} className="hover: text-blue-200">
                    Inicio
                    </Link>
                    <Link href="/sobre" className="hover:text-blue-200">
                    Sobre
                    </Link>
                    <Link href="/produtos" className="hover:text-blue-200">
                    Produtos
                    </Link>
                    <Link className="hover:text-blue-200"href="/contacto" >
                    Contacto
                    </Link>
                </div>
            </nav>
        </header>
    )
}