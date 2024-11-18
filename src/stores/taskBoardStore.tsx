import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  TCard,
  TColumn,
  TStoreContextProps,
  TStoreProviderProps,
} from "./types";

const StoreContext = createContext<TStoreContextProps | undefined>(undefined);

export const useTaskBoardStore = () => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useTaskBoardStore must be used within a StoreProvider");
  }
  return context;
};

const initialColumns: TColumn[] = [
  { id: "1", title: "To Do" },
  { id: "2", title: "In Progress" },
  { id: "3", title: "Done" },
];

const initialCards: TCard[] = [
  {
    id: "1",
    title: "Setup Project",
    description: "Initialize the project repository and setup initial files",
    date: "Nov 05, 2024, 09:40:06 AM",
    columnId: "1",
  },
  {
    id: "2",
    title: "Develop Features",
    description: "Start developing the main features of the application",
    date: "Nov 05, 2024, 10:00:06 AM",
    columnId: "2",
  },
  {
    id: "3",
    title: "Setup CI/CD",
    description: "Configure continuous integration and deployment pipelines",
    date: "Nov 05, 2024, 10:40:06 AM",
    columnId: "3",
  },
  {
    id: "4",
    title: "Write Unit Tests",
    description: "Write unit tests for the existing components",
    date: "Nov 05, 2024, 11:40:06 AM",
    columnId: "3",
  },
];

function StoreProvider({ children }: TStoreProviderProps) {
  const [columns, setColumns] = useState<TColumn[]>(() => {
    const dataString = localStorage.getItem("columns");
    if (dataString) {
      try {
        return JSON.parse(dataString);
      } catch (error) {
        console.error("Error parsing columns from local storage:", error);
      }
    }
    return initialColumns;
  });

  const [cards, setCards] = useState<TCard[]>(() => {
    const dataString = localStorage.getItem("cards");
    if (dataString) {
      try {
        return JSON.parse(dataString);
      } catch (error) {
        console.error("Error parsing cards from local storage:", error);
      }
    }
    return initialCards;
  });

  useEffect(() => {
    localStorage.setItem("columns", JSON.stringify(columns));
  }, [columns]);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const addColumn = (column: TColumn) => {
    setColumns((prevColumns) => [...prevColumns, column]);
  };

  const addCard = (card: TCard) => {
    setCards((prevCards) => [...prevCards, card]);
  };

  const removeCard = (cardId: string) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
  };

  const editCard = (updatedCard: TCard) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === updatedCard.id ? { ...card, ...updatedCard } : card
      )
    );
  };

  const removeColumn = (columnId: string) => {
    setColumns((prevColumns) =>
      prevColumns.filter((column) => column.id !== columnId)
    );
    setCards((prevCards) =>
      prevCards.filter((card) => card.columnId !== columnId)
    );
  };

  const dropCard = (toColumnId: string, cardId: string) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, columnId: toColumnId } : card
      )
    );
  };

  const contextValue = useMemo(
    () => ({
      columns,
      cards,
      addColumn,
      setColumns,
      setCards,
      addCard,
      removeCard,
      editCard,
      removeColumn,
      dropCard,
    }),
    [columns, cards]
  );

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
}

export default StoreProvider;
