import { FormEvent, memo, useState } from "react";
import { getFormattedDate } from "../../helpers/get-formatted-date";
import { useTaskBoardStore } from "../../stores/taskBoardStore";
import Button from "../button";
import CardForm from "../card-form";
import styles from "./styles.module.css";
import { TAddCardFormProps } from "./types";

function AddCardForm({ columnId }: TAddCardFormProps) {
  const { addCard } = useTaskBoardStore();
  const [showCard, setShowCard] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleAddButtonClick = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const date = getFormattedDate();
    if (!title) {
      setHasError(true);
      return;
    }
    setHasError(false);
    addCard({ title, description, date, columnId, id: `${Date.now()}` });
    setShowCard(false);
    setTitle("");
    setDescription("");
  };

  const handleCancelButtonClick = () => {
    setShowCard(false);
    setHasError(false);
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <Button
        className={styles.addCardButton}
        onClick={() => setShowCard(true)}
        type="button"
      >
        + Add a card
      </Button>
      {showCard && (
        <div className={styles.formContainer}>
          <CardForm
            title={title}
            description={description}
            onTitleChange={(event) => setTitle(event.target.value)}
            onDescriptionChange={(event) => setDescription(event.target.value)}
            onSubmit={handleAddButtonClick}
            onCancel={handleCancelButtonClick}
            hasError={hasError}
          />
        </div>
      )}
    </>
  );
}

export default memo(AddCardForm);
