import styled from "styled-components";

export const StyledButton = styled.button<{ color?: string; textColor?: string; hoverColor?: string}>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: ${({ color }) => color || "#52c41a"};
  color: ${({ textColor }) => textColor || "#fff"};

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || "#4ca317"};
  }

  &:disabled {
    background-color: #a1a1a1;
    cursor: not-allowed;
  }

  svg {
    font-size: 15px;
  }
`;