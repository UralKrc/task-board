import { FormEvent, memo, useState } from "react";
import Modal from "../../components/modal";
import { getFormattedDate } from "../../helpers/get-formatted-date";
import { useTaskBoardStore } from "../../stores/taskBoardStore";
import Button from "../button";
import Error from "../error";
import Form from "../form";
import Input from "../input";
import { TEditCardModalProps } from "./types";

function EditCardModal({ card, closeModal }: TEditCardModalProps) {
  const { editCard } = useTaskBoardStore();
  const [title, setTitle] = useState<string>(card.title);
  const [description, setDescription] = useState<string>(card.description);
  const [hasError, setHasError] = useState(false);

  const handleEditButtonClick = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const date = getFormattedDate();
    if (!title) {
      setHasError(true);
      return;
    }
    setHasError(false);
    editCard({
      title,
      description,
      date,
      columnId: card.columnId,
      id: card.id,
    });

    closeModal();
  };

  return (
    <Modal onClose={closeModal} title="Edit Card">
      <Form onSubmit={handleEditButtonClick}>
        <label>
          Card Title:
          <Input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label>
          Card Description:
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <Button type="submit">Save</Button>
      </Form>
      {hasError && (
        <Error description="You need to update the Card Title to proceed." />
      )}
    </Modal>
  );
}

export default memo(EditCardModal);
