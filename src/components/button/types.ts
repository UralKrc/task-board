export type TButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "default" | "close";
};
