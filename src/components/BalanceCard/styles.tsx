// components/BalanceCard/styles.tsx
import styled from "styled-components";

export const Card = styled.div`
  background-color: #000; /* Fundo mais escuro */
  color: #f5f5f5;
  padding: 20px 30px;
  border-radius: 20px; /* Bordas mais arredondadas */
  text-align: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Sombra para destaque */
  max-width: 300px; /* Largura máxima para manter compacto */
  margin: 0 auto; /* Centraliza o card horizontalmente */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  h2 {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 2.2rem;
    font-weight: bold;
    margin: 0;
    color: #4caf50; /* Verde para saldo positivo */
  }

  &:hover {
    transform: translateY(-5px); /* Efeito de elevação ao passar o mouse */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  }
`;
