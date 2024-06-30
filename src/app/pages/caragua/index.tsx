import useDimensions from "@/app/hook/useDimensions";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa";

export default function Caragua() {
  const { setSizeByScreen } = useDimensions();
  return (
    <div>
      <h1
        className="whitespace-nowrap poppins-extrabold color-change"
        style={{ fontSize: setSizeByScreen(30, 50, 75) }}
      >
        Caraguá 156
      </h1>
      <p
        className="text-justify"
        style={{ fontSize: setSizeByScreen(13, 15, 17) }}
      >
        O aplicativo 156 de Caraguatatuba é um projeto inovador desenvolvido em
        React Native, criado para oferecer maior comodidade à população da
        cidade. Ele facilita a comunicação com a prefeitura, permitindo a
        realização de denúncias, o atendimento de solicitações dos cidadãos, o
        agendamento de vacinas e a inscrição em eventos importantes. Além disso,
        o aplicativo conta com um sistema de notificações push que mantém os
        usuários informados sobre eventos relevantes, desastres e comemorações.
      </p>
      &nbsp;
      <div style={{ fontSize: setSizeByScreen(21, 23, 25) }}>
        <BiLogoPlayStore className="inline" /> -{" "}
        <a
          target="_blank"
          href="https://play.google.com/store/apps/details?id=com.jaasolucoes.ssadCaragua&hl=pt_BR"
          className="underline"
        >
          Play Store
        </a>
      </div>
      <div style={{ fontSize: setSizeByScreen(21, 23, 25) }}>
        <FaAppStoreIos className="inline" /> -{" "}
        <a
          target="_blank"
          href="https://apps.apple.com/br/app/caraguatatuba-156/id1460577980"
          className="underline"
        >
          App Store
        </a>
      </div>
    </div>
  );
}
