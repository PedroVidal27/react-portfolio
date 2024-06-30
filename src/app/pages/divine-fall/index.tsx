import useDimensions from "@/app/hook/useDimensions";
import { FaItchIo } from "react-icons/fa";

export default function DivineFall() {
  const { setSizeByScreen } = useDimensions();
  return (
    <div>
      <h1
        className="whitespace-nowrap poppins-extrabold color-change"
        style={{ fontSize: setSizeByScreen(18, 24, 50, 75) }}
      >
        The Divine Fall
      </h1>
      <p
        className="text-justify"
        style={{ fontSize: setSizeByScreen(12, 13, 15, 17) }}
      >
        O desenvolvimento de The Divine Fall foi meu primeiro contato com
        GameJams, tive a oportunidade de trabalhar ao lado de meus colegas da
        DEV-U durante esse projeto. O código, infelizmente está perdido no limbo
        do tempo, mas continuo creditado sob o nome Schultz0.
      </p>
      &nbsp;
      <p
        className="text-justify"
        style={{ fontSize: setSizeByScreen(12, 13, 15, 17) }}
      >
        Minha principal contribuição para o projeto foi no Level Design e
        história.
      </p>
      &nbsp;
      <div style={{ fontSize: setSizeByScreen(19, 21, 23, 25) }}>
        <FaItchIo className="inline" /> -{" "}
        <a
          target="_blank"
          href="https://luanmunholi.itch.io/the-divine-fall"
          className="underline"
        >
          Itch.io
        </a>
      </div>
    </div>
  );
}
