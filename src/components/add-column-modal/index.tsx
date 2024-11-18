import { FormEvent, memo, useState } from "react";
import Button from "../button";
import Error from "../error";
import Form from "../form";
import Input from "../input";
import Modal from "../modal";
import { TAddColumnProps } from "./types";

function AddColumnModal({ addNewColumn, closeModal }: TAddColumnProps) {
  const [label, setLabel] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleAdd = (event: FormEvent) => {
    event.preventDefault();
    if (!label.trim()) {
      setHasError(true);
      return;
    }
    setHasError(false);
    addNewColumn(label);
    setLabel("");
    closeModal();
  };

  return (
    <Modal onClose={closeModal} title="Add column">
      <Form onSubmit={handleAdd}>
        <Input
          placeholder="Column Title"
          value={label}
          onChange={(event) => setLabel(event.target.value)}
        />
        {hasError && <Error description="Column Title is required." />}
        <Button type="submit">Add</Button>
      </Form>
    </Modal>
  );
}

export default memo(AddColumnModal);
