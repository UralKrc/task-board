import { DragEventHandler } from "react";
import { useTaskBoardStore } from "../../stores/taskBoardStore";
import AddCardForm from "../add-card-form";
import Button from "../button";
import Card from "../card";
import styles from "./styles.module.css";
import { TColumnProps } from "./types";

function Column({
  column,
  dropCard,
  cards,
  editCard,
  setDragged,
}: TColumnProps) {
  const { removeColumn } = useTaskBoardStore();

  const handleDeleteClick = () => {
    removeColumn(column.id);
  };

  const handleDrop: DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    dropCard();
  };

  const allowDrop: DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.column}>
      <div className={styles.columnHeader}>
        <h2 className={styles.columnTitle}>{column.title}</h2>
        <Button type="button" onClick={handleDeleteClick} variant="close">
          &times;
        </Button>
      </div>
      <div
        className={styles.cardContainer}
        onDrop={handleDrop}
        onDragOver={allowDrop}
        onDragEnter={allowDrop}
      >
        {cards.map((card) => (
          <Card
            card={card}
            edit={() => editCard(card)}
            drag={setDragged}
            key={card.id}
          />
        ))}
        <AddCardForm columnId={column.id} />
      </div>
    </div>
  );
}

export default Column;
