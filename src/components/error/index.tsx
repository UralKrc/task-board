import styles from "./styles.module.css";
import { TErrorProps } from "./types";

function Error({ description }: TErrorProps) {
  return <p className={styles.error}>{description}</p>;
}

export default Error;
