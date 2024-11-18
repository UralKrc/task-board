import styles from "./styles.module.css";
import { TButtonProps } from "./types";

function Button({
  onClick,
  children,
  className,
  type,
  variant = "default",
}: TButtonProps) {
  return (
    <button
      className={`${styles.button} ${className} ${
        variant === "close" ? styles.closeButton : ""
      }`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
