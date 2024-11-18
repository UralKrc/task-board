import { TCard, TColumn } from "../../stores/types";

export type TColumnProps = {
  column: TColumn;
  dropCard: () => void;
  cards: TCard[];
  editCard: (card: TCard) => void;
  setDragged: (id: string) => void;
};
