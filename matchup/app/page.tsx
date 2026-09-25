"use client";

import MenuLandingPage from "./components/menuLandingPage";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { IoPieChartOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineHandshake } from "react-icons/md";
import { MdOutlineVerified } from "react-icons/md";


export default function Page() {
  return (
    <div className="flex h-[100vh] w-full flex-col">
      <MenuLandingPage />

      <main
        className="flex h-full w-full flex-col items-center justify-center "
        style={{
          backgroundImage: "url('/bg-lp.png')",
          backgroundRepeat: "repeat-y",
          backgroundSize: "cover",
        }}
      >
        <div className="flex h-8 w-fit items-center gap-2 rounded-full bg-[#EFF4FF] px-4 text-[#004AC6]">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#004AC6]" />

          <span className="font-jakarta text-[11px] font-bold">
            A PLATAFORMA INTELIGENTE DE CONEXÃO DE CAPITAL & STARTUPS
          </span>
        </div>

        <h1 className="mt-6 text-center text-7xl font-bold max-w-[900px] leading-[4rem] text-[#1C1C1C]">
          Conectando startups às{" "}
          <span className="bg-gradient-to-r from-[#004AC6] via-[#712AE2] to-[#2563EB] bg-clip-text text-transparent">
            oportunidades certas.
          </span>
        </h1>

        <p className="mt-6 text-center text-lg text-gray-600 max-w-[700px]">
          Encontre investidores alinhados rigorosamente ao seu negócio ou descubra startups de alto crescimento com métricas comprovadas e diligência prévia.
        </p>

        <div className="flex flex-col items-center gap-4">
          <div className="mt-6 flex gap-4">
            <a
              href="#"
              className="flex items-center rounded-md bg-[#004AC6] px-6 py-3 text-sm font-blold text-white hover:bg-[#2563EB]"
            >
              <MdOutlineRocketLaunch className="mr-2" />
              Sou uma Startup
            </a>
            <a
              href="#"
              className="flex items-center rounded-md border border-[#004AC6] px-6 py-3 text-sm font-bold text-[#004AC6] hover:bg-[#EFF4FF]"
            >
              <IoPieChartOutline className="mr-2 text-purple-800" />
              Sou Investidor
            </a>
          </div>
          <div className=" flex flex-row gap-4 text-sm text-gray-500">
            <div>
              <FaRegCheckCircle className="mr-2 inline text-green-700" />
              Sem mensalidade oculta.
            </div>
            <div>
              <FaRegCheckCircle className="mr-2 inline text-green-700" />
              Diligência prévia auditada
            </div>
            <div>
              <FaRegCheckCircle className="mr-2 inline text-green-700" />
              +450 rodadas facilitadas
            </div>
          </div>
        </div>

        <div className="mt-9 flex h-8 w-fit items-center gap-2 rounded-full bg-[#FFFFF] px-4 shadow-xl">
          <span className="h-2 w-2 shrink-0 rounded-full bg-green-700" />

          <span className="font-jakarta text-[11px] font-bold">
            Match Mútuo Confirmado! Sinergia de Tese & Governança 
          </span>
          <span className="font-jakarta text-[11px] font-bold text-green-700 bg-[#E6F4EA] px-2 rounded-sm">
            94% Fit
          </span>
        </div>

        <div className="mt-6 flex justify-center h-fit w-[60%] bg-blue-100 p-10 rounded-lg " >
          <section className="flex flex-col gap-4 w-fit p-4 bg-white rounded-lg shadow-md"  >
            
            <div className="flex flex-row items-start gap-2 w-fit p-4 flex-start"  >
              <div className="w-fit p-3 mt-2 bg-blue-100 rounded-lg text-center text-blue-700 font-bold"  >  
                FF
              </div>
              <div className="flex flex-col gap-1"  >
                <h2 className="font-jakarta text-lg font-bold text-black">FinFlow <MdOutlineVerified className="inline ml-2 text-green-600" /></h2>
                <span className="font-jakarta text-[12px] font-thin text-gray-600 max-w-[220px]">Infraestrutura de Cobrança B2B & Split API</span>
              </div>
              <span className="font-jakarta text-[12px] font-thin text-gray-600 max-w-[220px] bg-purple-200 p-1 rounded-full ml-4 text-purple-700 px-2 font-bold">
                Seed
              </span>
            </div>
          </section>
          <div className="flex flex-col items-center gap-2 w-fit p-4"  >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-[#004AC6]  to-[#712AE2]">
              <MdOutlineHandshake className="text-4xl text-white" />
            </div>
            <span className="font-jakarta text-sm font-thin text-black">MATCH</span>
          </div>
          <div className="flex flex-col gap-4 w-fit p-4 bg-white rounded-lg shadow-md"  >

          </div>
        </div>

      </main>
    </div>
  );
}