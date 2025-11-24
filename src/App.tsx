import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import "../src/styles/global.css";
import "../src/styles/theme.css";
import styles from "./App.module.css";

import { FaSignalMessenger } from "react-icons/fa6";

import { Container } from "./components/Container";
import { Rota } from "./Rotas";
import { Heading } from "./components/Heading";
import { FormModal } from "../src/components/Form";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <div>
          <Heading />
        </div>

        <div>
          <Container>
            <Rota />
          </Container>
        </div>

        <div className={styles.containerBotao}>
          <button
            onClick={() => setIsFormOpen(true)}
            className={styles.contact_button}
          >
            <FaSignalMessenger className={styles.icone} />
          </button>
        </div>

        {isFormOpen && <FormModal onClose={() => setIsFormOpen(false)} />}
      </div>
    </BrowserRouter>
  );
}

export default App;
