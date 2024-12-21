import React from "react";
import * as S from "./styles";
import { TransactionTypes } from "../../enums";
import { TransactionListProps } from "./types";

const TransactionList: React.FC<TransactionListProps> = ({ transactions, onSelectTransaction }) => {
  return (
    <S.TransactionsWrapper>
      <h2>Transações</h2>

      <S.TransactionsHeader>
        <S.HeaderItem>Categoria</S.HeaderItem>
        <S.HeaderItem>Valor</S.HeaderItem>
        <S.HeaderItem>Data</S.HeaderItem>
      </S.TransactionsHeader>

      <S.TransactionsList>
        {transactions.map((transaction) => (
          <S.TransactionItem
            key={transaction.id}
            isExpense={transaction.type === TransactionTypes.EXPENSE}
            onClick={() => onSelectTransaction(transaction)}
          >
            <p>{transaction.category?.name}</p>
            <p className="amount">R$ {transaction.amount.toFixed(2)}</p>
            <p>{new Date(transaction.transactionDate).toLocaleDateString()}</p>
          </S.TransactionItem>
        ))}
      </S.TransactionsList>
    </S.TransactionsWrapper>
  );
};

export default TransactionList;
