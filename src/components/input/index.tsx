import React, { forwardRef } from "react";
import styles from "./styles.module.css";
import { TInputProps } from "./types";

function Input(props: TInputProps, ref: React.Ref<HTMLInputElement>) {
  const { id, type, placeholder, value, onChange } = props;
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      ref={ref}
      className={styles.input}
    />
  );
}

export default forwardRef<HTMLInputElement, TInputProps>(Input);
