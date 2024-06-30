import useDimensions from "@/app/hook/useDimensions";
import { TfiWorld } from "react-icons/tfi";

export default function SSAD() {
  const { setSizeByScreen } = useDimensions();
  return (
    <div>
      <h1
        className="whitespace-nowrap poppins-extrabold color-change"
        style={{ fontSize: setSizeByScreen(20, 30, 50, 75) }}
      >
        SSAD
      </h1>
      <p
        className="text-justify"
        style={{ fontSize: setSizeByScreen(12, 13, 15, 17) }}
      >
        O Sistema de Solicitações e Acompanhamento de Demandas, desenvolvido em
        ASP.NET, gerencia os aplicativos 156 SAEG e 156 Caraguatatuba. Ele
        integra o GLPI e oferece ferramentas para otimizar a gestão de demandas.
        O teleatendente pode encaminhar e notificar as secretarias responsáveis,
        garantindo um atendimento ágil e eficiente. As funcionalidades do
        sistema asseguram uma administração eficaz e uma resposta rápida às
        solicitações.
      </p>
      &nbsp;
      <p
        className="text-justify"
        style={{ fontSize: setSizeByScreen(12, 13, 15, 17) }}
      >
        No meu trabalho com o Sistema de Solicitações e Acompanhamento de
        Demandas, fui responsável pela manutenção e pelo suporte na
        implementação de novas funcionalidades.
      </p>
      &nbsp;
      <div style={{ fontSize: setSizeByScreen(19, 21, 23, 25) }}>
        <TfiWorld className="inline" /> -{" "}
        <a
          target="_blank"
          href="https://caraguatatuba156.com.br/"
          className="underline"
        >
          Site
        </a>
      </div>
    </div>
  );
}
