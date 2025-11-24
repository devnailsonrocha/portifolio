// import { MoveRight } from "lucide-react";
import styles from "./styles.module.css";

import Perfil from "../../assets/naizinho.jpg";
import SocialIcons from "../../components/Media/SocialIcons";

export function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home_banner}>
        <h1>DESENVOLVEDOR FRONTEND</h1>
        <p>
          Chegue mais, véi! sou o Nailson Rocha, e transformo ideias em
          interfaces web bonitas e fáceis de usar.
        </p>
      </div>

      <div className={styles.imagem}>
        <img src={Perfil} alt="Foto de perfil" className={styles.perfil} />
      </div>

      <div className={styles.icone}>
        <SocialIcons className={styles.si} />
      </div>
    </div>
  );
}
