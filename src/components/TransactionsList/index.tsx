import React from "react";
import * as S from "./styles";
import { TransactionTypes } from "../../enums";
import { TransactionListProps } from "./types";

const TransactionList: React.FC<TransactionListProps> = ({ transactions, onSelectTransaction }) => {
  return (
    <S.TransactionsWrapper>
      <h2>Transações</h2>
      <S.TransactionsList>
        {transactions.map((transaction) => (
          <S.TransactionItem
            key={transaction.id}
            isExpense={transaction.type === TransactionTypes.EXPENSE}
            onClick={() => onSelectTransaction(transaction)}
          >
            <p>Categoria: {transaction.category?.name}</p>
            <p className="amount">R$ {transaction.amount.toFixed(2)}</p>
            <p>Data: {new Date(transaction.transactionDate).toLocaleDateString()}</p>
          </S.TransactionItem>
        ))}
      </S.TransactionsList>
    </S.TransactionsWrapper>
  );
};

export default TransactionList;
