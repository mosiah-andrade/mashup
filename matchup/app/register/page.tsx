"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


export default function login() {
  const router = useRouter();
  const user = {
    email: 'admin@senac.edu',
    password: 'admin'
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCadatro = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/onboarding')
  };


  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center bg-blue-950  p-4 overflow-hidden">
      
      
      <main className="flex flex-1 w-full max-w-xl flex-col bg-gray-200 rounded-lg items-center justify-center py-12 px-6 lg:px-16 sm:items-start">
        <div className='flex flex-col m-auto'>
          <Image
            src="https://tse3.mm.bing.net/th/id/OIP.qQJSBsXTGL_EDB97awxL_wHaEc?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Logo Perscrutar"
            width={300}
            height={128}
            className="h-32 w-auto object-contain"
            unoptimized
          />
          
          <p className="mt-4 text-1xl text-center w-full border-black-10">
            Match Up
          </p>
        </div>
        
        
        <form onSubmit={handleCadatro} className="mt-8 w-full max-w-md">
          <h2 className="pb-5 font-bold">
            Registrar
          </h2>
          <div className="flex flex-col gap-4">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              className="rounded-[8.066px] bg-white border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-800 text-gray-600 w-full"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="email"
              id="confirmar_email"
              name="confirmar_email"
              value={email}
              className="rounded-[8.066px] bg-white border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-800 text-gray-600 w-full"
              placeholder="Confirme seu email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              className="rounded-[8.066px] bg-white border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-800 text-gray-600 w-full"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              value={password}
              className="rounded-[8.066px] bg-white border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-800 text-gray-600 w-full"
              placeholder="Confirme sua senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="flex items-center mt-4">
            <input type="checkbox" name="remember" id="remember" className="mr-2 h-4 w-4" />
            <label htmlFor="remember" className="text-lg font-medium select-none">
              Manter-me conectado
            </label>
          </div>
          
          <button
            type="submit"
            className="rounded-[8.066px] bg-blue-950 text-white hover:bg-blue-800 font-bold py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mt-6 cursor-pointer transition-colors button" 
          >
            Cadastrar
          </button>

          <a 
            href="/" 
            className=" rounded-[8.066px] bg-blue-950 text-white hover:bg-blue-800 font-bold py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mt-6 cursor-pointer transition-colors button">
          Voltar
          </a>

        </form>
      </main> 

      {/* <aside className="flex items-center justify-center p-4"> 
        <Image
          src={Icon}
          alt="Ícone decorativo"
          placeholder="blur"
          className="object-cover max-w-[80vw] lg:max-w-[40vw] h-auto"
          unoptimized
        />
      </aside> */}
      
      
      <aside className="flex flex-1 items-center justify-center p-4 w-full h-full lg:max-w-[50vw]"> 
        {/* <Image
          src="/octops4.png" // Caminho direto para a pasta public
          alt="Animacao do Tentaculo"
          width={500}          // Defina uma largura base aproximada
          height={500}         // Defina uma altura base aproximada
          className="w-full max-w-[80vw] lg:max-w-[45vw] h-auto object-contain"
          unoptimized          // CRÍTICO: Sem isso, o Next.js pode travar a animação do GIF
        /> */}
      </aside>

    </div>
  );
}