import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import styles from "./styles.module.css";

import { Home } from "../pages/Home";
import { Navbar } from "../components/Navbar";
import { Habilidades } from "../pages/Habilidades/Habilidades";

export function Rota() {
  const location = useLocation();

  return (
    <div className={styles.rota}>
      <div className={styles.rota_secundary}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/habilidades" element={<Habilidades />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}
