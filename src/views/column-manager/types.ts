import { TColumn } from "../../stores/types";

export type TColumnManagerProps = {
  columns: TColumn[];
  setColumns: (columns: TColumn[]) => void;
};
