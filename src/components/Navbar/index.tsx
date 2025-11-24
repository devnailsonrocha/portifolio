import { Link } from "react-router-dom";
import { FaCode, FaFolderOpen } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";

import styles from "./styles.module.css";

// Ícones de navegação como "social"
interface SocialIcon {
  tooltip: string;
  url: string;
  IconComponent: React.ElementType;
  bgColor: string;
}

const socialData: SocialIcon[] = [
  {
    tooltip: "Inicio",
    url: "/",
    IconComponent: IoMdHome,
    bgColor: "#1e90ff",
  },
  {
    tooltip: "Habilidades",
    url: "/habilidades",
    IconComponent: FaCode,
    bgColor: "#32cd32",
  },
  {
    tooltip: "Projetos",
    url: "/projetos",
    IconComponent: FaFolderOpen,
    bgColor: "#ff8c00",
  },
];

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.secao}>
        <h1>MEUS PROJETOS, HABILIDADES E EXPERIÊNCIAS</h1>
        <p>
          Descubra como aplico criatividade e técnica para construir soluções
          digitais. Explore os projetos que já desenvolvi e as ferramentas que
          domino.
        </p>
      </div>

      <ul className={styles.social}>
        {socialData.map((iconData, index) => {
          const Icon = iconData.IconComponent;
          return (
            <li
              key={index}
              data-tooltip={iconData.tooltip}
              style={{ "--bg": iconData.bgColor } as React.CSSProperties}
            >
              <Link to={iconData.url} aria-label={iconData.tooltip}>
                <Icon className={styles.socialIcon} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
