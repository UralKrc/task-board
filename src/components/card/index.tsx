import { DragEventHandler, memo } from "react";
import { useTaskBoardStore } from "../../stores/taskBoardStore";
import Button from "../button";
import styles from "./styles.module.css";
import { TCardProps } from "./types";

function Card({ card, edit, drag }: TCardProps) {
  const { removeCard } = useTaskBoardStore();

  const remove = () => {
    removeCard(card.id);
  };

  const handleDragStart: DragEventHandler<HTMLDivElement> = () => {
    drag(card.id);
  };

  return (
    <div className={styles.card} draggable="true" onDragStart={handleDragStart}>
      <div>
        <span className={styles.cardHeading}>Title</span>
        <div className={styles.cardContent}>{card.title}</div>
        {card.description ? (
          <>
            <span className={styles.cardHeading}>Description</span>
            <div className={styles.cardDescription}>{card.description}</div>
          </>
        ) : null}
      </div>
      <div>
        <span className={styles.cardHeading}>Created At:</span>
        <div className={styles.cardDescription}>{card.date}</div>
      </div>
      <div className={styles.cardFooter}>
        <Button onClick={edit}>Edit</Button>
        <Button onClick={remove}>Delete</Button>
      </div>
    </div>
  );
}

export default memo(Card);
