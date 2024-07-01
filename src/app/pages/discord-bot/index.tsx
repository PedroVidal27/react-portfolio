import useDimensions from "@/app/hook/useDimensions";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos, FaGithub } from "react-icons/fa";

export default function DiscordBot() {
  const { setSizeByScreen } = useDimensions();
  return (
    <div>
      <h1
        className="whitespace-nowrap poppins-extrabold color-change"
        style={{ fontSize: setSizeByScreen(20, 30, 50, 75) }}
      >
        Discord Bot
      </h1>
      <p
        className="text-justify"
        style={{ fontSize: setSizeByScreen(12, 13, 15, 17) }}
      >
        Um pequeno projeto pessoal de um Bot de Discord, feito utilizando
        discord.js, opus, em Javascript puro. O Bot é capaz de tocar músicas, e
        tem uma personalidade rabugenta. É o Bot que utilizo em meus servidores
        com meus amigos para ouvirmos música, mas tenho planos de expandir seu
        uso.
      </p>
      &nbsp;
      <div style={{ fontSize: setSizeByScreen(19, 21, 23, 25) }}>
        <FaGithub className="inline" /> -{" "}
        <a
          target="_blank"
          href="https://github.com/PedroVidal27/nodejs-discordbot"
          className="underline"
        >
          Github
        </a>
      </div>
    </div>
  );
}
