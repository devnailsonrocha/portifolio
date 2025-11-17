import styles from "./style.module.css";

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.container_conteudo} `}>{children}</div>
    </div>
  );
}
