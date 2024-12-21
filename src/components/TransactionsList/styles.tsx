import styled from "styled-components";

export const TransactionsWrapper = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: auto;
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

  > div {
    flex: 1;
    text-align: center; 
  }

  &:first-child {
      text-align: left;
  }

    &:last-child {
      text-align: right;
  }
`;

export const HeaderItem = styled.div`
  flex: 1;
  text-align: center;

  &:first-child {
    text-align: left;
  }

  &:last-child {
    text-align: right;
  }
`;

export const TransactionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TransactionItem = styled.li<{ isExpense: boolean }>`
  display: flex;
  padding: 8px 12px;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border-bottom: 1px solid #444;
  color: #fff;
  cursor: pointer;

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
    }

    &:last-child {
      text-align: right;
    }
  }
`;
