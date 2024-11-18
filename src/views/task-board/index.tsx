import { useState } from "react";
import AddColumnModal from "../../components/add-column-modal";
import Button from "../../components/button";
import { useTaskBoardStore } from "../../stores/taskBoardStore";
import ColumnManager from "../column-manager";

function TaskBoard() {
  const { addColumn } = useTaskBoardStore();
  const [isAddColumnModalOpen, setAddColumnModalOpen] = useState(false);

  const handleAddNewColumn = (title: string) => {
    addColumn({ title, id: `${Date.now()}` });
  };

  return (
    <>
      <section>
        <Button onClick={() => setAddColumnModalOpen(true)}>
          Add a column
        </Button>
        {isAddColumnModalOpen && (
          <AddColumnModal
            addNewColumn={handleAddNewColumn}
            closeModal={() => setAddColumnModalOpen(false)}
          />
        )}
      </section>
      <ColumnManager />
    </>
  );
}

export default TaskBoard;
