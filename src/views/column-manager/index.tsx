import { memo, useRef, useState } from "react";
import Column from "../../components/column";
import EditCardModal from "../../components/edit-card-modal";
import { useTaskBoardStore } from "../../stores/taskBoardStore";
import { TCard } from "../../stores/types";

function ColumnManager() {
  const { columns, cards, dropCard } = useTaskBoardStore();
  const draggedCardId = useRef<string | null>(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<TCard | null>(null);

  const handleEdit = (card: TCard) => {
    setSelectedCard(card);
    setEditModalOpen(true);
  };

  const setDragged = (id: string) => {
    draggedCardId.current = id;
  };

  const handleDropCard = (toColumnId: string) => {
    if (draggedCardId.current) {
      dropCard(toColumnId, draggedCardId.current);
    }
  };

  return (
    <section>
      {columns.map((column) => (
        <Column
          column={column}
          key={column.id}
          dropCard={() => handleDropCard(column.id)}
          cards={cards.filter((card) => card.columnId === column.id)}
          editCard={handleEdit}
          setDragged={setDragged}
        />
      ))}
      {isEditModalOpen && selectedCard && (
        <EditCardModal
          card={selectedCard}
          closeModal={() => setEditModalOpen(false)}
        />
      )}
    </section>
  );
}

export default memo(ColumnManager);
