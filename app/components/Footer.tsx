export default function Footer(){
    return(
        <footer className="bg-gray-800 text-white mt-auto">
            <div className="max-w-4xl mx-auto p-6">
                <div className="grid grid-cols-3 gap-8 mb-4">
                    <div>
                        <h3 className="font-bold mb-2">Empresa</h3>
                        <ul className="space-y-1">
                            <li>Sobre Nos</li>
                            <li>Carreiras</li>
                        </ul>
                    </div>
                    <div >
                        <h3 className="font-bold mb-2 ">
                            Produtos
                        </h3>
                        <ul className="space-y-1">
                            <li>Catagolo</li>
                            <li>Promoçoes</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Contacto</h3>
                        <ul className="space-y-1">
                            <li>Email</li>
                            <li>Telefone</li>
                        </ul>
                    </div>

                </div>
                <div className="border-t border-gray-700 pt-4 text-center text-sm">
                    2026 Minha Empresa. Todos direitos reservados.
                </div>
            </div>
        </footer>
    )
}