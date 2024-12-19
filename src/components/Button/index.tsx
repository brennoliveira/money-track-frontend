import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  color,
  textColor,
  hoverColor,
  disabled = false,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      color={color}
      textColor={textColor}
      hoverColor={hoverColor}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;