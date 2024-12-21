import React, { useState } from "react";
import { TransactionTypes } from "../../enums";
import * as S from "./styles";
import { TransactionListProps } from "./types";
import { FaEllipsisVertical, FaX } from "react-icons/fa6";
import api from "../../services/api";
import { FaFile } from "react-icons/fa";
import { TransactionModel } from "../../models";
import TransactionDetailModal from "../TransactionDetailModal";

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [selectedTransaction, setSelectedTransaction] = useState<TransactionModel | null>(null);

  const toggleMenu = (transactionId: number) => {
    setOpenMenuId((prev) => (prev === transactionId ? null : transactionId));
  };

  const handleDeleteTransaction = async (transactionId: number) => {
    try {
      await api.delete(`/api/transactions/${transactionId}`)
    } catch (error) {
      console.log("erro ao excluir: ", error);
    }
  };

  const handleDetails = (transaction: TransactionModel) => {
    setSelectedTransaction(transaction);
    setOpenMenuId(null);
  };

  const closeModal = () => {
    setSelectedTransaction(null);
  };

  return (
    <S.TransactionsWrapper>
      <h2>Transações</h2>

      <S.TransactionsHeader>
        <S.HeaderItem>Categoria</S.HeaderItem>
        <S.HeaderItem>Valor</S.HeaderItem>
        <S.HeaderItem>Data</S.HeaderItem>
        <S.HeaderItem>Opções</S.HeaderItem>
      </S.TransactionsHeader>

      <S.TransactionsList>
        {transactions.map((transaction) => (
          <S.TransactionItem
            key={transaction.id}
            isExpense={transaction.type === TransactionTypes.EXPENSE}
            // onClick={() => onSelectTransaction(transaction)}
          >
            <p>{transaction.category?.name}</p>
            <p className="amount">R$ {transaction.amount.toFixed(2)}</p>
            <p>{new Date(transaction.transactionDate).toLocaleDateString()}</p>
            <p>
              <FaEllipsisVertical
                onClick={() => toggleMenu(transaction.id)}
                style={{ cursor: 'pointer' }}
              />
              <S.ActionMenu isVisible={openMenuId === transaction.id}>
                <S.ActionMenuItem onClick={() => handleDetails(transaction)}>
                  <FaFile /> Ver Detalhes
                </S.ActionMenuItem>
                <S.ActionMenuItem onClick={() => handleDeleteTransaction(transaction.id)}>
                  <FaX /> Excluir Transação
                </S.ActionMenuItem>
              </S.ActionMenu>
            </p>
          </S.TransactionItem>
        ))}
      </S.TransactionsList>

      {selectedTransaction && (
        <TransactionDetailModal
          transaction={selectedTransaction}
          onClose={closeModal}
        ></TransactionDetailModal>
      )}
    </S.TransactionsWrapper>
  );
};

export default TransactionList;
