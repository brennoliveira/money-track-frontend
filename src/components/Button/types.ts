export interface ButtonProps {
  onClick?    : () => void;
  children    : React.ReactNode;
  color?      : string;
  textColor?  : string;
  hoverColor? : string;
  disabled?   : boolean;
}