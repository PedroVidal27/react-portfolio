import Typewritter from "@/app/components/typing";
import useDimensions from "@/app/hook/useDimensions";

export default function MainPage() {
  const { setSizeByScreen } = useDimensions();
  return (
    <>
      <h1
        className="w-[10vw] whitespace-nowrap poppins-extrabold"
        style={{ fontSize: setSizeByScreen(30, 50, 75) }}
      >
        <Typewritter text={"Olá Mundo!"} delay={80} />
      </h1>
      <p
        className="text-justify"
        style={{ fontSize: setSizeByScreen(13, 15, 17) }}
      >
        Meu nome é Pedro Vidal, sou Desenvolvedor Front-End e Mobile de São
        Paulo. Desenvolvi aplicações no ramo do serviço público que se
        destacaram pela sua facilidade de uso e aprovação dos clientes.
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
          Meus hobbies pessoais incluem: Desenvolvimento de jogos e mods, muay
          thai, academia e resolução de problemas.
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
  );
}
