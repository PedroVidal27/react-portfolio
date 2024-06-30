"use client";
import { useEffect, useState } from "react";
import useDimensions from "./hook/useDimensions";
import "./styles.css";
import logo from "../assets/logo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import DivineFall from "./pages/divine-fall";
import MainPage from "./pages/main";
import SAEG from "./pages/saeg";
import Caragua from "./pages/caragua";
import SSAD from "./pages/ssad";

export default function Home() {
  const { setSizeByScreen, isLargeDevice } = useDimensions();
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const [content, setContent] = useState<JSX.Element | undefined>(undefined);

  const handleClick = (newContent: JSX.Element | undefined) => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsFadingOut(false);
      setContent(newContent);
    }, 1000);
  };

  if(!isClient) return <></>

  return (
    <main className="flex flex-col items-center justify-center montserrat">
      <section className="flex flex-col my-10 w-[90vw] h-[800px] pb-12 rounded-[50px] bg-[#222222]">
        <nav className="flex flex-row h-20 mt-10 w-full">
          <div className="ml-10 flex w-full justify-start">
            <a onClick={() => handleClick(<MainPage />)}>
              <img
                style={{
                  width: setSizeByScreen(50, 60, 90),
                  height: setSizeByScreen(50, 60, 90),
                }}
                src={logo.src}
              />
            </a>
          </div>
          <div className="flex w-full justify-end gap-5 mr-10 text-[#CDCDCD]">
            <a
              target="_blank"
              href="https://github.com/PedroVidal27"
              className="underline"
            >
              <FaGithub size={setSizeByScreen(40, 45, 75)} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/pedro-c-vidal/"
              className="underline"
            >
              <FaLinkedin size={setSizeByScreen(45, 50, 80)} />
            </a>
          </div>
        </nav>
        <div className="flex flex-row w-full h-full">
          <div
            style={{
              paddingTop: setSizeByScreen(40, 50, 70),
              marginLeft: setSizeByScreen(20, 30, 75),
            }}
            className={`flex flex-col w-[100%] h-full ${
              isFadingOut ? "fade-out" : "fade-in"
            }`}
          >
            {content ? content : <MainPage />}
          </div>
          <div
            style={{
              paddingTop: setSizeByScreen(45, 50, 100),
              marginRight: setSizeByScreen(20, 30, 75),
              fontSize: setSizeByScreen(13, 15, 17),
            }}
            className="flex flex-col w-full h-full items-end"
          >
            <h1
              className="whitespace-nowrap pb-10 poppins-extrabold color-change"
              style={{ fontSize: setSizeByScreen(30, 50, 45) }}
            >
              Projetos
            </h1>
            <a
              className="inline underline font-bold"
              onClick={() => handleClick(<Caragua />)}
            >
              156 Caraguá
            </a>
            <a
              className="inline underline font-bold"
              onClick={() => handleClick(<SAEG />)}
            >
              SAEG
            </a>
            <a
              className="inline underline font-bold"
              onClick={() => handleClick(<SSAD />)}
            >
              SSAD
              {isLargeDevice()
                ? " - Sistema de Solicitações e Acompanhamento de Demandas"
                : undefined}
            </a>
            <a
              className="inline underline font-bold"
              onClick={() => handleClick(<DivineFall />)}
            >
              The Divine Fall
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
