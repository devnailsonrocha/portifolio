import React from "react";
import styles from "./SocialIcons.module.css";

// Importar os ícones específicos do Font Awesome 6 no react-icons
import {
  FaWhatsapp, // WhatsApp
  FaInstagram, // Instagram
  FaXTwitter, // X (Twitter)
  FaLinkedinIn, // LinkedIn
  FaYoutube, // YouTube
  FaGithub, // GitHub
} from "react-icons/fa6";

// Definição de dados
interface SocialIcon {
  tooltip: string;
  url: string;
  IconComponent: React.ElementType;
  bgColor: string;
}

// Estrutura de dados atualizada com seus ícones e cores
const socialData: SocialIcon[] = [
  {
    tooltip: "WhatsApp",
    url: "https://wa.me/5571993375310?text=Olá,%20quero%20falar%20com%20você!",
    IconComponent: FaWhatsapp,
    bgColor: "#25D366",
  },
  {
    tooltip: "Instagram",
    url: "https://instagram.com/devnailsonrocha",
    IconComponent: FaInstagram,
    bgColor:
      "linear-gradient(-45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
  },
  {
    tooltip: "Twitter",
    url: "https://x.com/devnailsonrocha",
    IconComponent: FaXTwitter,
    bgColor: "#101419",
  },
  {
    tooltip: "LinkedIn",
    url: "https://www.linkedin.com/in/devnailsonrocha/",
    IconComponent: FaLinkedinIn,
    bgColor: "#0077B5",
  },
  {
    tooltip: "YouTube",
    url: "https://www.youtube.com/@devnailsonrocha",
    IconComponent: FaYoutube,
    bgColor: "#ff0000",
  },
  {
    tooltip: "GitHub",
    url: "https://github.com/devnailsonrocha",
    IconComponent: FaGithub,
    bgColor: "#181717",
  },
];

type SocialIconsProps = {
  className?: string;
};

const SocialIcons: React.FC<SocialIconsProps> = ({ className }) => {
  return (
    // Removendo os títulos H1/H2 e focando no componente de ícones,
    // tornando-o mais reutilizável.
    <ul className={`${styles.social} ${className}`}>
      {socialData.map((iconData, index) => {
        // Desestruturando o componente para uso direto
        const Icon = iconData.IconComponent;

        return (
          <li
            key={index}
            data-tooltip={iconData.tooltip}
            // Injeta a variável CSS usando o style do React
            style={{ "--bg": iconData.bgColor } as React.CSSProperties}
          >
            <a href={iconData.url} aria-label={iconData.tooltip} target="blank">
              <Icon className={styles.socialIcon} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialIcons;
