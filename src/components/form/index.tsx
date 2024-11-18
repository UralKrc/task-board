import styles from "./styles.module.css";
import { TFormProps } from "./types";

function Form({ onSubmit, children }: TFormProps) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default Form;
