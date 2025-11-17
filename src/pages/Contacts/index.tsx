import styles from "./styles.module.css";

export function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.contact_cards}>
        <div className={styles.contact_info}>
          <h1>Vamos conversar?</h1>
          <p>
            Envie uma mensagem para tirar dúvidas, contratar meus serviços ou
            para feedbacks.
          </p>
        </div>
        <div className={styles.contact_form}>
          <form className={styles.form} action="">
            <div className={styles.contact_inputs}>
              <div className={styles.card_input}>
                <label htmlFor="text">Seu nome</label>
                <input
                  type="text"
                  name="Nome"
                  required
                  placeholder="Digite seu nome"
                />
              </div>

              <div className={styles.card_input}>
                <label htmlFor="email">Seu email</label>
                <input
                  type="email"
                  name="Email"
                  required
                  placeholder="Digite seu email"
                />
              </div>
            </div>

            <div className={styles.contact_textarea}>
              <div className={styles.textarea_div}>
                <label htmlFor="">Sua mensagem</label>
                <textarea
                  name=""
                  id=""
                  required
                  placeholder="Fala comigo!"
                ></textarea>
              </div>
              <div className={styles.button_div}>
                <button className={styles.button}>Enviar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
