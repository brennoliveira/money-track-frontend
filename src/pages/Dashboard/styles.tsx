import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%; /* Garante que ocupe toda a largura */
  height: 100vh; /* Garante que ocupe toda a altura */
  background-color: #1e1e2f;
  color: #f5f5f5;
  overflow: hidden; /* Evita barras de rolagem desnecessárias */
`;

export const Navbar = styled.nav`
  width: 100%;
  background-color: #292940;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const NavItem = styled.a`
  color: #f5f5f5;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: #f39c12;
  }
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1200px;
  flex: 1; /* Faz com que o conteúdo ocupe o espaço restante */
  margin: 20px 0; /* Margens verticais */
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden; /* Impede que elementos ultrapassem os limites */
`;

export const BalanceCard = styled.div`
  background-color: s;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 2rem;
    margin-top: 10px;
  }
`;

export const TransactionsWrapper = styled.div`
  width: 100%;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 15px;
  }
`;

export const TransactionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TransactionItem = styled.li<{ isExpense: boolean }>`
  background-color: #292940;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #343456;
  }

  p {
    margin: 0;
    font-size: 1rem;
  }

  .amount {
    color: ${({ isExpense }) => (isExpense ? "#FF4D4F" : "#52C41A")}
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #292940;
  padding: 20px;
  border-radius: 8px;
  color: #f5f5f5;
  text-align: center;
`;

export const CloseButton = styled.button`
  background-color: #ff4d4f;
  border: none;
  color: white;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: #ff7875;
  }
`;

export const Loader = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 20px;
  color: #cccccc;
`;

export const ErrorMessage = styled.div`
  color: #ff4d4f;
  text-align: center;
  font-size: 1.2rem;
  margin-top: 20px;
  background-color: #3a1e1e;
  padding: 10px;
  border-radius: 8px;
`;
