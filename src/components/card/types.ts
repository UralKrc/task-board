import { TCard } from "../../stores/types";

export type TCardProps = {
  card: TCard;
  edit: () => void;
  drag: (id: string) => void;
};
