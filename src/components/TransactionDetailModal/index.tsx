import React from 'react';
import { TransactionTypes } from '../../enums';
import * as S from './styles';
import { TransactionDetailModalProps } from './types';

const TransactionDetailModal: React.FC<TransactionDetailModalProps> = ({ transaction, onClose }) => {
  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.ModalHeader>
          <h2>Detalhes da Transação</h2>
          <button onClick={onClose}>X</button>
        </S.ModalHeader>
        
        <S.ModalContent>
          <p><strong>Categoria:</strong> {transaction.category?.name}</p>
          <p><strong>Valor:</strong> R$ {transaction.amount.toFixed(2)}</p>
          <p><strong>Data:</strong> {new Date(transaction.transactionDate).toLocaleDateString()}</p>
          <p><strong>Tipo:</strong> {transaction.type === TransactionTypes.EXPENSE ? 'Despesa' : 'Receita'}</p>
          {transaction.description && (
            <p><strong>Descrição:</strong> {transaction.description}</p>
          )}
        </S.ModalContent>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default TransactionDetailModal;
