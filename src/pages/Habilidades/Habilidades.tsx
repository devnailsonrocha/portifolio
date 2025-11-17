import styles from "./Habilidades.module.css";

import { motion } from "framer-motion";

export function Habilidades() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.habilidades}>
        <div className={styles.habilidades_container}>
          <div className={styles.introducao}>
            <div>
              <h1>PROJETANDO FUTURO, DAQUELE JEITO MASSA</h1>
            </div>
            <p>
              Graduando em Análise e Desenvolvimento de Sistemas pela UNIJORGE,
              véi. Apaixonado por transformar ideias em realidade digital, eu
              gosto de começar do zero e dar vida a cada detalhe diretamente no
              navegador, viu? Pra mim, programar é mais do que escrever código:
              é criar experiências que conectam pessoas e tecnologia. Se ligue
              nas tecnologias e ferramentas que eu utilizo pra codar.
            </p>
          </div>

          <div className={styles.box}>
            <div className={`${styles.linguagens} ${styles.box}`}>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Java</li>
                <li>Git</li>
              </ul>
            </div>

            <div className={`${styles.ferramentas} ${styles.box}`}>
              <ul>
                <li>GitHub</li>
                <li>Scrum</li>
                <li>VS Code</li>
                <li>IntelliJ</li>
                <li>CodeBlocks</li>
                <li>MySQL</li>
                <li>Bootstrap</li>
                <li>
                  {" "}
                  <a
                    className={styles.curriculo}
                    href="/nailson.pdf"
                    target="blank"
                  >
                    Baixar curriculo
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
