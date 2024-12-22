import React, { useState } from "react";
import { FaFile } from "react-icons/fa";
import { FaEllipsisVertical, FaX } from "react-icons/fa6";
import { TransactionTypes } from "../../enums";
import { TransactionModel } from "../../models";
import api from "../../services/api";
import TransactionDetailModal from "../TransactionDetailModal";
import * as S from "./styles";
import { TransactionListProps } from "./types";
import { toast } from "react-toastify";

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [selectedTransaction, setSelectedTransaction] = useState<TransactionModel | null>(null);

  const toggleMenu = (transactionId: number) => {
    setOpenMenuId((prev) => (prev === transactionId ? null : transactionId));
  };

  const handleDeleteTransaction = async (transactionId: number) => {
    try {
      toast.loading("Excluindo transação...");
      await api.delete(`/api/transactions/${transactionId}`);
      console.log(2)
      window.location.reload();
      
      toast.success("Transação excluida com sucesso!");
    } catch (error) {
      console.log("erro ao excluir: ", error);
      toast.error(`Erro ao excluir transação: ${error}`);
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
        <S.HeaderItem>Título</S.HeaderItem>
        <S.HeaderItem>Categoria</S.HeaderItem>
        <S.HeaderItem>Valor</S.HeaderItem>
        <S.HeaderItem>Data</S.HeaderItem>
        <S.HeaderItem>Opções</S.HeaderItem>
      </S.TransactionsHeader>

      {transactions.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#999', marginTop: '20px' }}>
          Você ainda não possui nenhuma transação cadastrada.
        </p>
      )
      : 
      (

      <S.TransactionsList>
        {transactions.map((transaction) => (
          <S.TransactionItem
            key={transaction.id}
            isExpense={transaction.type === TransactionTypes.EXPENSE}
            // onClick={() => onSelectTransaction(transaction)}
          >
            <p>{transaction.title}</p>
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
                <S.ActionMenuItem onClick={async () => await handleDeleteTransaction(transaction.id)}>
                  <FaX /> Excluir Transação
                </S.ActionMenuItem>
              </S.ActionMenu>
            </p>
          </S.TransactionItem>
        ))}
      </S.TransactionsList>
      )}

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
