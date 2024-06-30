"use client";
import { ReactNode, useState } from "react";
import Typewritter from "./components/typing";
import useDimensions from "./hook/useDimensions";
import "./styles.css";
import logo from "../assets/logo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const { setSizeByScreen, isLargeDevice } = useDimensions();
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [content, setContent] = useState<ReactNode | undefined>(undefined);

  const divineFall = () => {
    return (
      <div>
        <h1 className="whitespace-nowrap" style={{ fontSize: "2rem" }}>
          The Divine Fall
        </h1>
        <p className="text-justify" style={{ fontSize: "1rem" }}>
          O desenvolvimento de The Divine Fall foi meu primeiro contato com
          GameJams, tive a oportunidade de trabalhar ao lado de meus colegas da
          DEV-U para desenvolver esse trabalho. O código, infelizmente está
          perdido no limbo do tempo, mas continuo creditado sob o nome Schultz0.
          Minha principal contribuição para o projeto foi no Level Design e
          história.
        </p>
        <a>itch.io</a>
      </div>
    );
  };

  const saeg = (
    <div>
      <h1
        className="whitespace-nowrap"
        style={{ fontSize: setSizeByScreen(30, 50, 75) }}
      >
        New Content Here!
      </h1>
      <p
        className="text-justify"
        style={{ fontSize: setSizeByScreen(13, 15, 17) }}
      >
        This is the new content that appears after the fade-out animation.
      </p>
    </div>
  );

  const caragua = (
    <div>
      <h1
        className="whitespace-nowrap"
        style={{ fontSize: setSizeByScreen(30, 50, 75) }}
      >
        New Content Here!
      </h1>
      <p
        className="text-justify"
        style={{ fontSize: setSizeByScreen(13, 15, 17) }}
      >
        This is the new content that appears after the fade-out animation.
      </p>
    </div>
  );

  const ssad = (
    <div>
      <h1
        className="whitespace-nowrap"
        style={{ fontSize: setSizeByScreen(30, 50, 75) }}
      >
        New Content Here!
      </h1>
      <p
        className="text-justify"
        style={{ fontSize: setSizeByScreen(13, 15, 17) }}
      >
        This is the new content that appears after the fade-out animation.
      </p>
    </div>
  );

  const handleClick = (newContent: ReactNode | undefined) => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsFadingOut(false);
      setContent(newContent);
    }, 1000);
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <section className="flex flex-col my-10 w-[90vw] h-[800px] pb-12 rounded-[50px] bg-[#222222]">
        <nav className="flex flex-row h-20 mt-10 w-full">
          <div className="ml-10 flex w-full justify-start">
            <img
              style={{
                width: setSizeByScreen(50, 60, 90),
                height: setSizeByScreen(50, 60, 90),
              }}
              src={logo.src}
            />
          </div>
          <div className="flex w-full justify-end gap-5 mr-10 text-[#CDCDCD]">
            <a>
              <FaGithub size={setSizeByScreen(40, 45, 75)} />
            </a>
            <a>
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
            className={`flex flex-col w-[75%] h-full ${
              isFadingOut ? "fade-out" : "fade-in"
            }`}
          >
            {content ? (
              content
            ) : (
              <>
                <h1
                  className="w-[10vw] whitespace-nowrap"
                  style={{ fontSize: setSizeByScreen(30, 50, 75) }}
                >
                  <Typewritter text={"Olá Mundo!"} delay={80} />
                </h1>
                <p
                  className="text-justify"
                  style={{ fontSize: setSizeByScreen(13, 15, 17) }}
                >
                  Meu nome é Pedro Vidal, sou Desenvolvedor Front-End e Mobile
                  de São Paulo. Desenvolvi aplicações no ramo do serviço público
                  que se destacaram pela sua facilidade de uso e aprovação dos
                  clientes.
                </p>
                &nbsp;
                <div
                  className="text-justify"
                  style={{ fontSize: setSizeByScreen(13, 15, 17) }}
                >
                  <p>Fui Vice-Presidente do D.A IFSP-CAR em 2024.</p>
                  &nbsp;
                  <p>
                    {" "}
                    Meus hobbies pessoais incluem: Desenvolvimento de jogos e
                    mods, muay thai, academia e resolução de problemas.
                  </p>
                </div>
                <h1
                  className="whitespace-nowrap pt-10"
                  style={{ fontSize: setSizeByScreen(30, 50, 45) }}
                >
                  Afiliações:
                </h1>
                <div>
                  <a
                    target="_blank"
                    href="https://asimovjr.com.br/"
                    className="inline underline font-bold"
                  >
                    Asimov Jr.
                  </a>{" "}
                  | 2021 {"->"} 2022
                </div>
                <br />
                <div>
                  <a
                    target="_blank"
                    href="https://dev-unifei.github.io/"
                    className="inline underline font-bold"
                  >
                    Dev-U
                  </a>{" "}
                  | 2022 {"->"} 2023
                </div>
                <br />
                <div>
                  <p className="whitespace-nowrap">
                    <a
                      target="_blank"
                      href="https://puah.com.br/"
                      className="inline underline font-bold"
                    >
                      Puah Consultoria
                    </a>{" "}
                    | 2023 {"->"} Atual
                  </p>
                </div>
              </>
            )}
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
              className="whitespace-nowrap pb-10"
              style={{ fontSize: setSizeByScreen(30, 50, 45) }}
            >
              Projetos
            </h1>
            <a
              className="inline underline font-bold"
              onClick={() => handleClick(caragua)}
            >
              156 Caraguá
            </a>
            <a
              className="inline underline font-bold"
              onClick={() => handleClick(saeg)}
            >
              SAEG
            </a>
            <a
              className="inline underline font-bold"
              onClick={() => handleClick(ssad)}
            >
              SSAD
              {isLargeDevice()
                ? " - Sistema de Solicitações e Acompanhamento de Demandas"
                : undefined}
            </a>
            <a
              className="inline underline font-bold"
              onClick={() => handleClick(divineFall())}
            >
              The Divine Fall
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
