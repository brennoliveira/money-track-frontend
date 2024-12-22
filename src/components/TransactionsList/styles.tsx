import styled from "styled-components";

export const TransactionsWrapper = styled.div`
  width: 100%;
  flex: 1;
  padding: 10px;
  background-color: #1e1e2f;
  border-radius: 8px;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 15px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #777;
  }
`;

export const TransactionsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: #333;
  color: #fff;
  font-weight: bold;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const HeaderItem = styled.div`
  flex: 1;
  text-align: center;

  &:first-child {
    text-align: left;
    flex: 1;
  }

  &:nth-child(2) {
    text-align: left;
    flex: 1;
  }

  &:nth-child(3) {
    text-align: left;
    flex: 1; 
  }

  &:nth-child(4) {
    text-align: left;
    flex: 1; 
  }

  &:last-child {
    text-align: right;
    flex: 0 0 80px;
  }
`;

export const TransactionsList = styled.ul`
  min-height: 200px;
  overflow-y: auto;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TransactionItem = styled.li<{ isExpense: boolean }>`
  display: flex;
  padding: 8px 12px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #444;
  color: #fff;
  position: relative;

  &:hover {
    background: #3c3c3c;
  }

  .amount {
    font-weight: bold;
    color: ${({ isExpense }) => (isExpense ? "#ff4d4d" : "#4caf50")};
  }

  > p {
    flex: 1;
    text-align: center;

    &:first-child {
      text-align: left;
      flex: 1;
    }

    &:nth-child(2) {
      text-align: left;
      flex: 1;
    }

    &:nth-child(3) {
      text-align: left;
      flex: 1;
    }

    &:nth-child(4) {
      text-align: left;
      flex: 1;
    }

    &:last-child {
      text-align: right;
      flex: 0 0 80px;
    }
  }
`;

export const ActionMenu = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #333;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  min-width: 120px;  // Largura reduzida para um estilo de menu compacto
  padding: 5px 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease, visibility 0.2s ease;
  
  ${({ isVisible }: { isVisible: boolean }) =>
    isVisible &&
    `
    opacity: 1;
    visibility: visible;
  `}
`;

export const ActionMenuItem = styled.div`
  padding: 8px 12px;
  color: #fff;
  cursor: pointer;
  font-size: 0.9rem;
  text-align: left;
  border-bottom: 1px solid #999;

  &:hover {
    background: #555;
  }
`;


