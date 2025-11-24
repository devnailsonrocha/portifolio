import styles from "./Habilidades.module.css";

export function Habilidades() {
  return (
    <div className={styles.habilidades}>
      <div className={styles.introducao}>
        <div>
          <h1>PROJETANDO FUTURO, DAQUELE JEITO MASSA</h1>
        </div>
        <p>
          Graduando em ADS pela UNIJORGE, véi. Curto transformar ideia em
          experiência digital, começando do zero e botando cada detalhe pra
          ganhar vida no navegador. Pra mim, programar é criar conexão entre
          gente e tecnologia. Se ligue nas tecnologias que eu uso pra codar.
        </p>
      </div>

      <div className={styles.lista}>
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
  );
}
