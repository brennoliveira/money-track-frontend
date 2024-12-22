import React, { useState } from "react";
import { toast } from "react-toastify";
import { TransactionTypes } from "../../enums"; // Certifique-se de importar o enum TransactionTypes
import api from "../../services/api";
import * as S from "./styles";
import { EditTransactionModalProps } from "./types";

const EditTransactionModal: React.FC<EditTransactionModalProps> = ({
  transaction,
  onClose,
  onSave,
  // categories,
}) => {
  const [title, setTitle] = useState<string>(transaction.title);
  const [amount, setAmount] = useState<number>(transaction.amount);
  const [type, setType] = useState<TransactionTypes>(transaction.type);
  // const [categoryId, setCategoryId] = useState<number>(transaction.category?.id || 0);
  const [transactionDate, setTransactionDate] = useState<string>(
    new Date(transaction.transactionDate).toISOString().split("T")[0]
  );
  const [description, setDescription] = useState<string>(transaction.description || "");

  const handleSave = async () => {
    try {
      const updatedTransaction = {
        ...transaction,
        title,
        amount,
        type,
        // categoryId,
        transactionDate,
        description,
      };

      await api.put(`/api/transactions/${transaction.id}`, updatedTransaction);
      toast.success("Transação atualizada com sucesso!");
      onSave();
      onClose();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Erro ao atualizar transação.");
    }
  };

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <h2>Editar Transação</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Título*:
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título da transação"
              required
            />
          </label>

          <label>
            Valor*:
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              placeholder="R$"
              required
            />
          </label>

          <label>
            Tipo*:
            <select name="type" value={type} onChange={(e) => setType(e.target.value as TransactionTypes)}>
              <option value={TransactionTypes.EXPENSE}>Despesa</option>
              <option value={TransactionTypes.INCOME}>Receita</option>
            </select>
          </label>

          {/* <label>
            Categoria*:
            <select
              name="categoryId"
              value={categoryId}
              onChange={(e) => setCategoryId(Number(e.target.value))}
            >
              {categories.map((cat: CategoryModel) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </label> */}

          <label>
            Data*:
            <input
              type="date"
              name="transactionDate"
              value={transactionDate}
              onChange={(e) => setTransactionDate(e.target.value)}
              required
            />
          </label>

          <label>
            Descrição:
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descrição da transação"
            />
          </label>

          <div>
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" onClick={handleSave}>
              Salvar
            </button>
          </div>
        </form>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default EditTransactionModal;
