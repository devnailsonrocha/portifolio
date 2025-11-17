import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

export function Button({ children, onClick }: ButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      // Se passar uma função externa, executa ela
      onClick();
      return;
    }

    // Comportamento padrão do menu toggle
    const goingHome = location.pathname === "/navbar";
    navigate(goingHome ? "/" : "/navbar");
    setIsOpen(!goingHome);
  };

  return (
    <button
      className={`${styles.menuToggle} ${isOpen ? styles.open : ""}`}
      onClick={handleClick}
    >
      {children ? (
        children
      ) : (
        <>
          <span></span>
          <span></span>
          <span></span>
        </>
      )}
    </button>
  );
}
