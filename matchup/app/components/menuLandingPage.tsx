import { FaUser } from "react-icons/fa";

export default function menuLandingPage(){
    return (
        <div className="bg-white min-h-14 flex items-center text-black px-6 gap-8">
            <div className="font-bold text-xl">
                Logo
            </div>

            <nav className="flex items-center gap-6">
                <a href="#" className="hover:text-blue-600">
                    Como Funciona
                </a>

                <a href="#" className="hover:text-blue-600">
                    Para StartUps
                </a>

                <a href="#" className="hover:text-blue-600">
                    Para Investidores
                </a>

                <a href="#" className="hover:text-blue-600">
                    Matching Inteligente
                </a>

                <a href="#" className="hover:text-blue-600">
                    Casos de Sucesso
                </a>
            </nav>
            <div className="flex items-center gap-4 ml-auto">
                <a href="" className=" hover:text-blue-800">
                    Entrar
                </a>
                <a
                    href="#"
                    className="w-[126px] h-6 rounded-md bg-blue-600 text-sm font-medium text-white flex items-center justify-center hover:bg-blue-700"
                >
                    Criar Conta
                </a>
                <a href="" className="bg-blue-600 text-white h-[24px] w-[24px] rounded-full hover:bg-blue-700 flex items-center justify-center">
                    <FaUser className="text-white text-sm" />
                </a>
            </div>
        </div>
    )
}