"use client";

import MenuLandingPage from "./components/menuLandingPage";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { IoPieChartOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineHandshake } from "react-icons/md";
import { MdOutlineVerified } from "react-icons/md";
import { MdOutlineLockOpen } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoCheckmarkSharp } from "react-icons/io5";
import { BsChatLeftText } from "react-icons/bs";
import { LuSettings2 } from "react-icons/lu";
import { MdOutlineFilterAlt } from "react-icons/md";
import { GoFileDirectory } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";
import { MdAutoGraph } from "react-icons/md";
import { PiShapes } from "react-icons/pi";
import { SlGraph } from "react-icons/sl";
import { FaMoneyBills } from "react-icons/fa6";

import Image from 'next/image';


export default function Page() {
  return (
    <div className="flex h-[100vh] w-full flex-col">
      <MenuLandingPage />

      <main
        className="flex min-h-screen w-full flex-col items-center overflow-x-hidden"
        style={{
          backgroundImage: "url('/bg-lp.png')",
          backgroundRepeat: "repeat-y",
          backgroundSize: "cover",
        }}
      >
        <div className="flex h-8 w-fit items-center gap-2 rounded-full bg-[#f5efe5] px-4 text-[#a3291d] mt-10">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--vermelho-1)]" />

          <span className="font-jakarta text-[11px] font-bold">
            A PLATAFORMA INTELIGENTE DE CONEXÃO DE CAPITAL & STARTUPS
          </span>
        </div>

        <h1 className="mt-6 text-center text-7xl font-bold max-w-[900px] leading-[4rem] text-slate-900">
          Conectando startups às{" "}
          <span className="text-[var(--vermelho-1)]">
            oportunidades certas.
          </span>
        </h1>

        <p className="mt-6 text-center text-lg text-gray-600 max-w-[700px]">
          Encontre investidores alinhados rigorosamente ao seu negócio ou descubra startups de alto crescimento com métricas comprovadas e diligência prévia.
        </p>

        <div className="flex flex-col items-center gap-4">
          <div className="mt-6 flex gap-4">
            <a
              href="/onboarding/startup"
              className="flex items-center rounded-md bg-[#a3291d] px-6 py-3 text-sm font-bold text-white hover:bg-[#c03020]"
            >
              <MdOutlineRocketLaunch className="mr-2" />
              Sou uma Startup
            </a>
            <a
              href="/onboarding/investidor"
              className="flex items-center rounded-md border border-[#c03020]/30 px-6 py-3 text-sm font-bold text-[#a3291d] hover:bg-[#f5efe5]"
            >
              <IoPieChartOutline className="mr-2 text-[var(--vermelho-1)]" />
              Sou Investidor
            </a>
          </div>
          <div className=" flex flex-row gap-4 text-sm text-gray-500">
            <div>
              <FaRegCheckCircle className="mr-2 inline text-[var(--vermelho-1)]" />
              Sem mensalidade oculta.
            </div>
            <div>
              <FaRegCheckCircle className="mr-2 inline text-[var(--vermelho-1)]" />
              Diligência prévia auditada
            </div>
            <div>
              <FaRegCheckCircle className="mr-2 inline text-[var(--vermelho-1)]" />
              +450 rodadas facilitadas
            </div>
          </div>
        </div>

        <div className="mt-9 flex h-8 w-fit items-center gap-2 rounded-full bg-white px-4 shadow-xl">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--vermelho-1)]" />

          <span className="font-jakarta text-[11px] font-bold">
            Match Mútuo Confirmado! Sinergia de Tese & Governança 
          </span>
          <span className="font-jakarta text-[11px] font-bold text-[var(--vermelho-1)] bg-[var(--bege-1)] px-2 rounded-sm">
            94% Fit
          </span>
        </div>

        <div className="mt-6 flex flex-row items-center justify-center w-[60%] bg-slate-50 p-10 rounded-lg">

          {/* startup card */}
          <section className="flex flex-col gap-4 w-fit px-8 py-2 bg-white rounded-lg shadow-md"  >
            
            <div className="flex flex-row items-start gap-2  py-4 flex-start justify-between"  >
              <div className="flex flex-row items-center gap-2"  >
                <div className="w-fit p-3 mt-2 bg-[var(--bege-1)] rounded-lg text-center text-[var(--vermelho-1)] font-bold"  >  
                  FF
                </div>
                <div className="flex flex-col gap-1"  >
                  <h2 className="font-jakarta text-lg font-bold text-black">FinFlow <MdOutlineVerified className="inline ml-2 text-[var(--vermelho-1)]" /></h2>
                  <span className="font-jakarta text-[12px] font-thin text-gray-600 max-w-[220px]">Infraestrutura de Cobrança B2B & Split API</span>
                </div>
              </div>
              <span className="font-jakarta text-[12px] font-thin text-gray-600 max-w-[220px] bg-[var(--bege-1)] p-1 rounded-full ml-4 text-[var(--vermelho-1)] px-2 font-bold">
                Seed
              </span>
            </div>

            <div className="bg-[var(--bege-1)] p-4 rounded-xl flex flex-row justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-black font-bold opacity-70 text-sm">
                  ARR Atual
                </span>
                <span className="text-black font-bold text-2xl">
                  R$2.4M
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-black font-bold opacity-70 text-sm">
                  MoM Growth
                </span>
                <span className="text-[var(--vermelho-1)] font-bold text-2xl">
                  +28%
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-black font-bold opacity-70 text-sm">
                  Alvo Captação
                </span>
                <span className="text-[var(--vermelho-1)] font-bold text-2xl">
                  R$ 1.5M
                </span>
              </div>
            </div>

            <div className=" flex justify-between h-1 text-sm font-bold text-gray-600">
              <div>
                Alocação Comprometida
              </div>
              <div>
                R$ 1.05M (70%)
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-4 ">
              <div className="bg-[var(--vermelho-1)] h-4 rounded-full w-[70%]" ></div>
            </div>

            {/* tags */}
            <div className="flex flex-row gap-2 text-xs font-bold">
              <div className="bg-[var(--bege-1)] px-2 py-1 rounded-lg">
                B2B SaaS
              </div>
              <div className="bg-[var(--bege-1)] px-2 py-1 rounded-lg">
                Fintech
              </div>
              <div className="bg-[var(--bege-1)] px-2 py-1 rounded-lg">
                São Paulo, BR
              </div>
            </div>

            {/* Rodapé */}
            <div className="flex flex-row justify-between pb-2 items-center gap-2 w-full py-4 ">
              <div>
                <Image src="/beatriz-ramos.png" alt="Beatriz Ramos" width={28} height={28} className="rounded-full" />
              </div>
              <div>
                <span className="font-bold text-black text-sm">
                  Beatriz Ramos • Co-founder & CEO
                </span>
              </div>
              <div className="flex flex-row  items-center rounded-lg">
                <MdOutlineLockOpen className=" text-[var(--vermelho-1)] " />
                <span className="font-bold text-[var(--vermelho-1)] text-sm">
                  Data Room Aberto
                </span>
              </div>
            </div>

          </section>


          <div className="flex flex-col items-center gap-2 align-center p-4 "  >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--vermelho-1)] border-4 border-[var(--bege-1)]" >
              <MdOutlineHandshake className="text-4xl text-white "  />
            </div>
            <span className="font-jakarta text-sm font-thin text-black">MATCH</span>

          </div>
          
          {/* investor card */}
          <section className="flex flex-col gap-4 w-fit px-8 py-2 bg-white rounded-lg shadow-md max-w-[500px]"  >
            
            <div className="flex flex-row items-start gap-2  py-4 flex-start justify-between"  >
              <div className="flex flex-row items-center gap-2"  >
                <Image src="/carlosmendes.webp" alt="Carlos" width={40} height={40} className="w-fit rounded-lg object-cover"/>
                
                <div className="flex flex-col gap-1"  >
                  <h2 className="font-jakarta text-lg font-bold text-black">Carlos Mendes <IoShieldCheckmarkOutline className="inline ml-2 text-[var(--vermelho-1)]" /></h2>
                  <span className="font-jakarta text-[12px] font-thin text-gray-600 max-w-[220px]">Angel Investor & Lead Syndicate</span>
                </div>
              </div>
              <span className="font-jakarta text-[12px] max-w-[220px] bg-[var(--bege-1)] p-1 rounded-full ml-4 text-[var(--vermelho-1)] px-2 font-bold">
                Credenciado
              </span>
            </div>

            <div className="bg-[var(--bege-1)] p-4 rounded-xl flex justify-between gap-5">
              <div className="flex flex-col">
                <span className="text-black font-bold opacity-70 text-sm">
                  Ticket Médio
                </span>
                <span className="text-black font-bold text-2xl">
                  R$ 300k
                </span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-black font-bold opacity-70 text-sm">
                  Deals Feitos
                </span>
                <span className="text-[var(--vermelho-1)] font-bold text-2xl">
                  14 aportes
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-black font-bold opacity-70 text-sm">
                  Sinergia FinFlow
                </span>
                <span className="text-[var(--vermelho-1)] font-bold text-2xl">
                  96%
                </span>
              </div>
            </div>

            <div className=" flex justify-between h-1 text-sm font-bold text-gray-600">
              <div>
                Critérios Prioritários de Tese
              </div>
            </div>


            {/* tags */}
            <div className="flex flex-row gap-2 text-xs font-bold flex-wrap">
              <div className="bg-white px-2 py-1 rounded-lg">
                <IoCheckmarkSharp className="inline mr-1 text-[var(--vermelho-1)]" />
                B2B SaaS
              </div>
              <div className="bg-white px-2 py-1 rounded-lg">
                <IoCheckmarkSharp className="inline mr-1 text-[var(--vermelho-1)]" />
                <span> Recorrência Líquida &gt; 85%</span>
              </div>
              <div className="bg-white px-2 py-1 rounded-lg">
                <IoCheckmarkSharp className="inline mr-1 text-[var(--vermelho-1)]" />
                Smart Money Comercial
              </div>
            </div>

            <span className="font-jakarta text-[12px] font-thin text-gray-600 ">
              “Buscando startups B2B com produto validado onde posso abrir portas no setor financeiro tradicional.”
            </span>

            {/* Rodapé */}
            <div className="flex flex-row justify-between pb-2 items-center gap-2 w-full py-4 ">
              
              <div>
                <span className="font-bold text-black text-sm">
                  Tempo de resposta médio: &gt; 24h
                </span>
              </div>
              <div className="flex flex-row bg-[var(--vermelho-1)] items-center rounded-lg p-2 gap-2 cursor-pointer hover:brightness-110 transition-colors">
                <BsChatLeftText className=" text-white " />
                <span className="font-bold text-white text-sm">
                  Iniciar Conversa
                </span>
              </div>
            </div>

          </section>
        </div>

        <div className=" bg-white w-full mt-10 py-20 flex flex-col items-center justify-center gap-8 border-t border-b border-gray-200">
          <span className="mt-[-20]"> CONFIADO POR FUNDADORES ACELERADOS E INVESTIDORES DOS PRINCIPAIS POLOS DE INOVAÇÃO</span>
          <div className="flex flex-row gap-4 items-center justify-around w-full max-w-[1500px] flex-wrap text-xl text-gray-600">
            <div className="flex flex-row items-center gap-2">
              <div className="w-[40px] h-[40px] relative bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                C
              </div>
              CUBO
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-[40px] h-[40px] relative bg-[var(--vermelho-1)] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                I
              </div>
              inovabra
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-[40px] h-[40px] relative bg-[var(--bege-1)] rounded-lg flex items-center justify-center text-[var(--vermelho-1)] font-bold text-sm">
                Y
              </div>
              YC Alumni
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-[40px] h-[40px] relative bg-[var(--vermelho-1)] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                D
              </div>
              DISTRITO
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-[40px] h-[40px] relative bg-[var(--vermelho-1)] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                A
              </div>
              ANJOS BR
            </div>
          </div>
        </div>

        <div className="bg-white w-full flex flex-col items-center justify-center gap-4 py-10">
          <span className="text-sm font-bold text-[var(--vermelho-1)]">FLUXO SEM ATRITO</span>
          <span className="text-4xl font-bold text-black">Simplicidade na descoberta, rigor na conexão</span>
          <p className="text-center text-lg text-gray-600 max-w-[700px]">
            Substituímos meses de prospecção cega e intermediários lentos por um fluxo algorítmico objetivo e transparente.
          </p>

          <div className="flex flex-row items-center justify-around w-[1500px]  flex-nowrap gap-20 mt-10 h-full pb-10">
            <div className="flex flex-col  gap-6 p-8 bg-white rounded-lg w-full shadow-md h-full ">
              <div className="w-16 h-16 bg-[var(--bege-1)] rounded-xl flex items-center justify-center text-[var(--vermelho-1)] text-3xl">
                01
              </div>
              <span className="font-bold text-black">Crie seu perfil</span>
              <p className="text-gray-600 text-sm max-w-[90%]">
                Defina critérios transparentes: se você é startup (métricas auditadas, cap table, tese de rodada) ou investidor (ticket médio, verticais prioritárias e valor agregado).
              </p>

              <div className="flex flex-col gap-2 rounded-lg bg-[var(--bege-1)] p-3">
                <div className="flex items-center justify-between gap-2 text-[12px] font-bold text-gray-600">
                  
                  <div className="flex items-center gap-2">
                    <LuSettings2 className="text-xl text-gray-600" />
                    <span>Parâmetro de tese</span>
                  </div>

                  <span className="whitespace-nowrap text-[var(--vermelho-1)]">
                    100% Configurado
                  </span>
                </div>

                <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full w-full rounded-full bg-[var(--vermelho-1)]" />
                </div>
              </div>

              
            </div>
            <div className="flex flex-col  gap-6 p-8 bg-white rounded-lg w-full shadow-md h-full ">
              <div className="w-16 h-16 bg-[var(--bege-1)] rounded-xl flex items-center justify-center text-[var(--vermelho-1)] text-3xl">
                02
              </div>
              <span className="font-bold text-black">Descubra oportunidades</span>
              <p className="text-gray-600 text-sm max-w-[90%]">
                Navegue pelo feed algorítmico em formato dinâmico de cards. Analise tração, burn rate, indicadores essenciais e filtre 90% do ruído de mercado em segundos.
              </p>

              <div className="flex flex-col gap-2 rounded-lg bg-[var(--bege-1)] p-3">
                <div className="flex items-center justify-between gap-2 text-[12px] font-bold text-gray-600">
                  
                  <div className="flex items-center gap-2">
                    <MdOutlineFilterAlt className="text-xl text-[var(--vermelho-1)]" />
                    <span>Filtro Preditivo</span>
                  </div>

                  <span className="whitespace-nowrap text-[var(--vermelho-1)]">
                    Apenas &gt; 85% Fit
                  </span>
                </div>

                <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full w-[85%] rounded-full bg-[var(--vermelho-1)]" />
                </div>
              </div>

              
            </div>
            <div className="flex flex-col  gap-6 p-8 bg-white rounded-lg w-full shadow-md h-full">
              <div className="w-16 h-16 bg-[var(--bege-1)] rounded-xl flex items-center justify-center text-[var(--vermelho-1)] text-3xl">
                03
              </div>
              <span className="font-bold text-black">Dê Match e conecte-se</span>
              <p className="text-gray-600 text-sm max-w-[90%]">
                Quando ambos manifestam interesse genuíno, a ponte direta é destravada: liberação de Data Room completo, chat institucional e agendamento instantâneo.
              </p>

              <div className="flex flex-col gap-2 rounded-lg bg-[var(--bege-1)] p-3">
                <div className="flex items-center justify-between gap-2 text-[12px] font-bold text-gray-600">
                  
                  <div className="flex items-center gap-2">
                    <GoFileDirectory className="text-xl text-[var(--vermelho-1)]" />
                    <span>Data Room Blindado</span>
                  </div>

                  <span className="whitespace-nowrap text-[var(--vermelho-1)]">
                    CVM 88 Ready
                  </span>
                </div>

                <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full w-full rounded-full bg-[var(--vermelho-1)]" />
                </div>
              </div>

              
            </div>
          </div>
        </div>

        <div className="bg-white w-full flex flex-col items-center justify-center gap-4 py-10">
          <span className="text-sm font-bold text-[var(--vermelho-1)]">ECOSSISTEMA SIMBIÓTICO</span>
          <span className="text-4xl font-bold text-gray-800 w-160 text-center">Desenenhado para os dois lados da mesa</span>
          <p className="text-center text-lg text-gray-600 max-w-[700px]">
            Crie seu perfil e descubra oportunidades de conexão com startups ou investidores alinhados à sua tese.
          </p>

          <div className="flex flex-row items-center justify-around w-[1500px]  flex-nowrap gap-20 mt-10 h-full pb-10"> 
            <div className="flex flex-col gap-6 p-8 bg-slate-50 rounded-3xl w-full h-full px-10 border border-slate-100">
              <div className="flex flex-row items-center gap-2 bg-white p-1 px-3 rounded-full w-fit text-[var(--vermelho-1)] font-bold">
                <MdOutlineRocketLaunch className="mr-2" />
                <span>Para Empreendedores & Fundadores</span>
              </div>
              <span className="text-black text-3xl">
                Chega de cold emails sem resposta. Capte com assertividade.
              </span>
              <p className="text-gray-600 text-[20px] max-w-[90%]">
                Você não precisa abordar centenas de investidores cujo foco passa longe do seu setor. O ENLA direciona seu pitch deck e métricas apenas para quem tem capital ativo e tese compatível com seu momento.
              </p>

              <div className=" flex gap-4 flex-col">
                <div className="flex flex-row gap-2 items-center">
                  <IoCheckmarkSharp className="inline mr-1 text-[var(--vermelho-1)] bg-white w-10 h-10 p-2 rounded-full" />
                  <div>
                    <span className="text-[20px] max-w-[90%] text-semibold">
                      Apresentação para teses 100% alinhadas
                    </span>
                    <p className="max-w-[90%]">
                      Evite perder tempo com investidores que não operam no seu ticket ou estágio.
                    </p>
                  </div>

                  
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <IoCheckmarkSharp className="inline mr-1 text-[var(--vermelho-1)] bg-white w-10 h-10 p-2 rounded-full" />
                  <div>
                    <span className="text-[20px] max-w-[90%] text-semibold">
                      Data Room institucional integrado e seguro
                    </span>
                    <p className="max-w-[90%]">
                      Controle permissões de leitura, marcas d'água e analytics de visualização por slide.
                    </p>
                  </div>

                  
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <IoCheckmarkSharp className="inline mr-1 text-[var(--vermelho-1)] bg-white w-10 h-10 p-2 rounded-full" />
                  
                  <div>
                    <span className="text-[20px] max-w-[90%] text-semibold">
                      Métricas auditadas que reduzem a fricção
                    </span>
                    <p className="max-w-[90%]">
                      Módulos padronizados de ARR, CAC e LTV aceleram a emissão de Term Sheets em até 3x.
                    </p>
                  </div>

                  
                </div>                 
              </div>

              <a href="/onboarding/startup" className="flex items-center px-8 gap-2 py-4 bg-[var(--vermelho-1)] w-fit rounded-md text-white hover:brightness-110">
                Cadastrar Minha Startup 
                <FaArrowRight className="mr-2 "/>
              </a>
            </div>
            <div className="flex flex-col gap-6 p-8 bg-slate-50 rounded-3xl w-full h-full px-10 border border-slate-100">
              <div className="flex flex-row items-center gap-2 bg-white p-1 px-3 rounded-full w-fit text-[var(--vermelho-1)] font-bold">
                <MdAutoGraph className="mr-2" />
                <span>Para Investidores-Anjo & Syndicates</span>
              </div>
              <span className="text-black text-3xl">
                Deal flow qualificado, pré-filtrado pelos seus critérios.
              </span>
              <p className="text-gray-600 text-[20px] max-w-[90%]">
                Elimine o fardo de triar decks mal formatados em sua caixa de entrada. Receba um fluxo contínuo de oportunidades curadas com relatórios de validação prévia de cap table e conformidade legal.
              </p>

              <div className=" flex gap-4 flex-col">
                <div className="flex flex-row gap-2 items-center">
                  <IoCheckmarkSharp className="inline mr-1 text-[var(--vermelho-1)] bg-white w-10 h-10 p-2 rounded-full" />
                  <div>
                    <span className="text-[20px] max-w-[90%] text-semibold">
                      Startups com métricas e tração comprovada
                    </span>
                    <p className="max-w-[90%]">
                      Conexão direta com ERP e Open Finance para atestação segura de fluxo financeiro.
                    </p>
                  </div>

                  
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <IoCheckmarkSharp className="inline mr-1 text-[var(--vermelho-1)] bg-white w-10 h-10 p-2 rounded-full" />
                  <div>
                    <span className="text-[20px] max-w-[90%] text-semibold">
                      Score algorítmico de aderência setorial
                    </span>
                    <p className="max-w-[90%]">
                      Descubra em 5 segundos por que aquela startup é estratégica para seu portfólio.
                    </p>
                  </div>

                  
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <IoCheckmarkSharp className="inline mr-1 text-[var(--vermelho-1)] bg-white w-10 h-10 p-2 rounded-full" />
                  
                  <div>
                    <span className="text-[20px] max-w-[90%] text-semibold">
                      Interface em cards para rápida triagem
                    </span>
                    <p className="max-w-[90%]">
                      Passe, salve ou solicite introdução com 1 clique. Economize de 10 a 15 horas semanais.
                    </p>
                  </div>

                  
                </div>                 
              </div>

              <a href="/onboarding/investidor" className="flex items-center px-8 gap-2 py-4 bg-[var(--vermelho-1)] w-fit rounded-md text-white hover:brightness-110">
                Acessar Deal Flow Exclusivo 
                <FaArrowRight className="mr-2 "/>
              </a>
            </div>
            

            
          </div>
          <div className="flex flex-row gap-6 p-8 bg-slate-50 w-full h-full px-10 justify-center">


              <div className="flex flex-col  gap-4 p-20  h-full px-20 max-w-[40%] align-center justify-center">
                <span className="text-[var(--vermelho-1)] font-bold">INTELIGÊNCIA CONTEXTUAL</span>
                <h3 className="text-[36px] leading-8 font-bold max-w-[90%]">Por dentro do motor de alta convicção do ENLA.</h3>
                <p className="text-[18px]">Não somos um classificado aberto. Nosso algoritmo cruza dezenas de variáveis estruturadas para garantir que cada notificação de oportunidade tenha alta probabilidade real de investimento.</p>
                <div className="bg-white w-full p-4 rounded-xl flex gap-4">
                  <MdOutlineVerified className="text-[45px] text-[var(--vermelho-1)]"/>
                  <p className=" font-bold">
                    Elimina até 90% das reuniões infrutíferas tanto para o fundador em sprint de captação quanto para o anjo.
                  </p>
                </div>
                <div className="flex gap-4">
                  <p>✓ Atualização contínua de pesos</p>
                  <p>✓ Feedback loop pós-reunião</p>
                </div>
              </div>


              <div className="flex flex-row gap-6 p-8  rounded-3xl w-full  h-full px-10  max-w-[50%] flex-wrap">
                <div className="flex flex-col gap-4 w-[350px] h-[175px] bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-2">
                      <PiShapes className="text-2xl text-[var(--vermelho-1)]" />
                      <h3 className="text-xl font-semibold">Setor & Vertical</h3>
                    </div>
                    <span className="text-sm text-[var(--vermelho-1)] bg-[var(--bege-1)] px-2 py-1 rounded-md font-semibold ">Peso 25%</span>
                  </div>
                  <p>Aderência direta à especialidade do investidor (Fintech, Health, EdTech, AgTech, Climate).</p>
                  <div className="w-full bg-[var(--bege-1)] rounded-full h-2 ">
                    <div className="bg-[var(--vermelho-1)] h-2 rounded-full w-[70%]" ></div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4 w-[350px] h-[175px] bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-2">
                      <SlGraph className="text-2xl text-[var(--vermelho-1)]" />
                      <h3 className="text-xl font-semibold">Estágio da Rodada</h3>
                    </div>
                    <span className="text-sm text-[var(--vermelho-1)] bg-white px-2 py-1 rounded-md font-semibold ">Peso 20%</span>
                  </div>
                  <p>Maturidade do negócio: Pre-seed, Seed ou Série A. Alinhamento de tolerância a risco.</p>
                  <div className="w-full bg-[var(--bege-1)] rounded-full h-2 ">
                    <div className="bg-[var(--vermelho-1)] h-2 rounded-full w-[65%]" ></div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4 w-[350px] h-[175px] bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-2">
                      <FaMoneyBills className="text-2xl text-[var(--vermelho-1)]" />
                      <h3 className="text-xl font-semibold">Ticket & Alocação</h3>
                    </div>
                    <span className="text-sm text-[var(--vermelho-1)] bg-white px-2 py-1 rounded-md font-semibold ">Peso 20%</span>
                  </div>
                  <p>Harmonia matemática entre o cheque mínimo/máximo do investidor e a fatia disponível na rodada.</p>
                  <div className="w-full bg-[var(--bege-1)] rounded-full h-2 ">
                    <div className="bg-[var(--vermelho-1)] h-2 rounded-full w-[90%]" ></div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4 w-[350px] h-[175px] bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-2">
                      <PiShapes className="text-2xl text-[var(--vermelho-1)]" />
                      <h3 className="text-xl font-semibold">Setor & Vertical</h3>
                    </div>
                    <span className="text-sm text-[var(--vermelho-1)] bg-[var(--bege-1)] px-2 py-1 rounded-md font-semibold ">Peso 25%</span>
                  </div>
                  <p>Aderência direta à especialidade do investidor (Fintech, Health, EdTech, AgTech, Climate).</p>
                  <div className="w-full bg-[var(--bege-1)] rounded-full h-2 ">
                    <div className="bg-[var(--vermelho-1)] h-2 rounded-full w-[70%]" ></div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4 w-[350px] h-[175px] bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-2">
                      <PiShapes className="text-2xl text-[var(--vermelho-1)]" />
                      <h3 className="text-xl font-semibold">Setor & Vertical</h3>
                    </div>
                    <span className="text-sm text-[var(--vermelho-1)] bg-[var(--bege-1)] px-2 py-1 rounded-md font-semibold ">Peso 25%</span>
                  </div>
                  <p>Aderência direta à especialidade do investidor (Fintech, Health, EdTech, AgTech, Climate).</p>
                  <div className="w-full bg-[var(--bege-1)] rounded-full h-2 ">
                    <div className="bg-[var(--vermelho-1)] h-2 rounded-full w-[70%]" ></div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4 w-[350px] h-[175px] bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-2">
                      <PiShapes className="text-2xl text-[var(--vermelho-1)]" />
                      <h3 className="text-xl font-semibold">Setor & Vertical</h3>
                    </div>
                    <span className="text-sm text-[var(--vermelho-1)] bg-[var(--bege-1)] px-2 py-1 rounded-md font-semibold ">Peso 25%</span>
                  </div>
                  <p>Aderência direta à especialidade do investidor (Fintech, Health, EdTech, AgTech, Climate).</p>
                  <div className="w-full bg-[var(--bege-1)] rounded-full h-2 ">
                    <div className="bg-[var(--vermelho-1)] h-2 rounded-full w-[70%]" ></div>
                  </div>
                </div>
                
                
              </div>

            </div>
            <footer className="bg-[var(--vermelho-1)] w-full flex flex-col items-center justify-center gap-4 py-10 m-[-50px]">
              <Image src="/icon5-png.png" alt="ENLA" width={96} height={96} />
              <span className="text-4xl font-bold text-white">Conectando startups às oportunidades certas.</span>
              <p className="text-center text-lg text-white max-w-[700px]">
                Encontre investidores alinhados rigorosamente ao seu negócio ou descubra startups de alto crescimento com métricas comprovadas e diligência prévia.
              </p>

              <div className="flex flex-row items-center justify-around w-[1500px]  flex-nowrap gap-20 mt-10 h-full pb-10">
                <a href="/onboarding/startup" className="flex items-center px-8 gap-2 py-4 bg-white w-fit rounded-md text-[var(--vermelho-1)] hover:bg-[var(--bege-1)]">
                  Sou uma Startup 
                  <FaArrowRight className="mr-2 "/>
                </a>
                <a href="/onboarding/investidor" className="flex items-center px-8 gap-2 py-4 bg-white w-fit rounded-md text-[var(--vermelho-1)] hover:bg-[var(--bege-1)]">
                  Sou Investidor 
                  <FaArrowRight className="mr-2 "/>
                </a>
              </div>
            </footer>
        </div>
      </main>
    </div>
  );
}