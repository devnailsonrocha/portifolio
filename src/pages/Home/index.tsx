// import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

import Perfil from "../../assets/naizinho.jpg";
import SocialIcons from "../../components/Media/SocialIcons";

export function Home() {
  return (
    <motion.div
      className={styles.home}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.home_secao}>
        <div className={styles.home_banner}>
          <h1>DESENVOLVEDOR FRONTEND</h1>
          <p>
            Chegue mais, véi! sou o Nailson Rocha, e transformo ideias em
            interfaces web bonitas e fáceis de usar.
          </p>
          <div className={`${styles.socialMedia} ${styles.socialMediaOne}`}>
            <SocialIcons />
          </div>
        </div>

        <div className={styles.home_caixa_perfil}>
          <img src={Perfil} alt="Foto de perfil" className={styles.perfil} />
        </div>
        <div className={`${styles.socialMedia} ${styles.socialMediaTwo}`}>
          <SocialIcons className={styles.si} />
        </div>
      </div>
    </motion.div>
  );
}
