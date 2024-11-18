export type TCard = {
  id: string;
  title: string;
  description: string;
  date: string;
  columnId: string;
};

export type TColumn = {
  id: string;
  title: string;
};

export type TStoreContextProps = {
  columns: TColumn[];
  cards: TCard[];
  setColumns: React.Dispatch<React.SetStateAction<TColumn[]>>;
  setCards: React.Dispatch<React.SetStateAction<TCard[]>>;
  addColumn: (column: TColumn) => void;
  addCard: (card: TCard) => void;
  removeCard: (cardId: string) => void;
  editCard: (card: TCard) => void;
  removeColumn: (columnId: string) => void;
  dropCard: (toColumnId: string, cardId: string) => void;
};

export type TStoreProviderProps = {
  children: React.ReactNode;
};
