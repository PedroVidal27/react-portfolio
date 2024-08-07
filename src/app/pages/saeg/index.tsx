import useDimensions from "@/app/hook/useDimensions";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa";

export default function SAEG() {
  const { setSizeByScreen } = useDimensions();
  return (
    <div>
      <h1
        className="whitespace-nowrap poppins-extrabold color-change"
        style={{ fontSize: setSizeByScreen(20, 30, 50, 75) }}
      >
        SAEG
      </h1>
      <p
        className="text-justify"
        style={{ fontSize: setSizeByScreen(12, 13, 15, 17) }}
      >
        O SAEG App é a plataforma central de atendimento para os cidadãos de
        Guaratinguetá que utilizam os serviços de água e esgoto da cidade.
        Desenvolvido em React Native, o aplicativo oferece uma solução prática
        para gerenciar todas as demandas relacionadas ao sistema de saneamento,
        incluindo solicitações de religações, pagamentos de contas,
        desligamentos, relatórios de vazamentos e reclamações.
      </p>
      &nbsp;
      <p
        className="text-justify"
        style={{ fontSize: setSizeByScreen(12, 13, 15, 17) }}
      >
        O Aplicativo também conta com um sistema de notificações, mantendo os
        usuários atualizados sobre a situação dos serviços de água em sua área.
      </p>
      &nbsp;
      <div style={{ fontSize: setSizeByScreen(19, 21, 23, 25) }}>
        <BiLogoPlayStore className="inline" /> -{" "}
        <a
          target="_blank"
          href="https://play.google.com/store/apps/details?id=com.guaratingueta.saeg&hl=pt_BR"
          className="underline"
        >
          Play Store
        </a>
      </div>
      <div style={{ fontSize: setSizeByScreen(19, 21, 23, 25) }}>
        <FaAppStoreIos className="inline" /> -{" "}
        <a
          target="_blank"
          href="https://apps.apple.com/us/app/156-saeg/id1662603910"
          className="underline"
        >
          App Store
        </a>
      </div>
    </div>
  );
}
