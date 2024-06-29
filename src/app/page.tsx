"use client";
import Typewritter from "./components/typing";
import useDimensions from "./hook/useDimensions";
import "./styles.css";
import logo from "../assets/logo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const { setSizeByScreen, isLargeDevice } = useDimensions();

  return (
    <main className="flex flex-col items-center justify-center">
      <section className="flex flex-col my-10 w-[90vw] h-[800px] pb-12 rounded-[50px] bg-[#222222]">
        <nav className="flex flex-row h-20 mt-10 w-full">
          <div className="ml-10 flex w-full justify-start">
            <img src={logo.src} />
          </div>
          <div className="flex w-full justify-end gap-5 mr-10 text-[#CDCDCD]">
            <a>
              <FaGithub size={setSizeByScreen(25, 50, 75)} />
            </a>
            <a>
              <FaLinkedin size={setSizeByScreen(25, 50, 80)} />
            </a>
          </div>
        </nav>
        <div className="flex flex-row w-full h-full mx-16">
          <div
            style={{ paddingTop: setSizeByScreen(55, 60, 100) }}
            className="flex flex-col w-full h-full"
          >
            <h1 style={{ fontSize: setSizeByScreen(55, 50, 75) }}>
              <Typewritter text={"Olá Mundo!"} delay={80} />
            </h1>
            <p style={{ fontSize: setSizeByScreen(15, 20, 20) }}>
              Meu nome é Pedro Vidal, eu sou um desenvolvedor Front-End e Mobile
              de São Paulo. Desenvolvi aplicações no ramo do serviço público que
              se destacaram pela sua facilidade de uso e aprovação dos clientes.
            </p>
          </div>
          <div style={{ paddingLeft: setSizeByScreen(20, 100, 100), fontSize: setSizeByScreen(17, 17, 16) }} className="flex flex-col w-full h-full justify-center">
            <a>156 Caraguá</a>
            <a>SAEG</a>
            <a>SSAD{isLargeDevice() ? " - Sistema de Solicitações e Acompanhamento de Demandas" : undefined}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
