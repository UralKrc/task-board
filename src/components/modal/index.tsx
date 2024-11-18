import { memo } from "react";
import { createPortal } from "react-dom";
import Button from "../button";
import styles from "./styles.module.css";
import { TModalProps } from "./types";

function Modal({ children, onClose, title }: TModalProps) {
  return createPortal(
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>{title}</h2>
          <Button onClick={onClose} variant="close">
            &times;
          </Button>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById("root")!
  );
}

export default memo(Modal);
