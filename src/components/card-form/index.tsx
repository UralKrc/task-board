import { FormEvent } from "react";
import Button from "../button";
import Error from "../error";
import Form from "../form";
import Input from "../input";
import styles from "./styles.module.css";
import { TCardFormProps } from "./types";

function CardForm({
  title,
  description,
  onTitleChange,
  onDescriptionChange,
  onSubmit,
  onCancel,
  hasError,
}: TCardFormProps) {
  const handleSubmit = (event: FormEvent<Element>) => {
    onSubmit(event as FormEvent<HTMLFormElement>);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        id="card-title"
        placeholder="Card Title"
        value={title}
        onChange={onTitleChange}
      />
      <Input
        id="card-description"
        placeholder="Card Description"
        value={description}
        onChange={onDescriptionChange}
      />
      {hasError && <Error description="Title is required" />}
      <div className={styles.buttonContainer}>
        <Button type="submit">Add</Button>
        <Button type="button" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </Form>
  );
}

export default CardForm;
