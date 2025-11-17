import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { Button } from "../Button";

export function Heading() {
  return (
    <div className={styles.heading}>
      <div className={styles.heading_conteudo}>
        <Link to="/">
          <h1 className={styles.logo}>NARO</h1>
        </Link>

        <div className={styles.heading_envelopa}>
          <nav>
            <Button />
          </nav>
        </div>
      </div>
    </div>
  );
}
