import styles from "./styles.module.css";

import { FaArrowRight } from "react-icons/fa";

interface FormModalProps {
  onClose: () => void;
}

export function FormModal({ onClose }: FormModalProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>
          X
        </button>

        <header className={styles.header}>
          <h1 className={styles.title}>Envie uma mensagem!</h1>
          <p className={styles.description}>
            Tem alguma dúvida, sugestão ou só quer conversar um pouco? Fique à
            vontade, viu?
          </p>
        </header>

        <form
          action="https://formspree.io/f/movpgpye"
          method="POST"
          className={styles.form}
        >
          <div className={styles.involucro}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Digite seu nome"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Insira seu endereço de email"
                className={styles.input}
                required
              />
            </div>
          </div>

          <div className={styles.textareaGroup}>
            <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Olá, Nailson! Tenho interesse nos seus serviços e gostaria de conversar. Quando podemos conversar?"
              className={styles.textarea}
              rows={10}
              required
            />
          </div>

          <div className={styles.containerBotao}>
            <button type="submit" className={styles.submitButton}>
              <FaArrowRight />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
