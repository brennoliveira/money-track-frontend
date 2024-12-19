import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { TransactionModalProps } from "./types";
import { TransactionTypes } from "../../enums";
import { CategoryModel } from "../../models";
import api from "../../services/api";

const TransactionModal: React.FC<TransactionModalProps> = ({ onClose }) => {
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    amount: 0,
    type: TransactionTypes.EXPENSE,
    categoryId: undefined,
    transactionDate: new Date().toDateString().split("T")[0],
    description: undefined,
  });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    const formattedValue = name === "transactionDate" ? value.split("T")[0] : value;

    setFormData((prev) => ({ ...prev, [name]: formattedValue }));

  };

  const handleSubmit = async (e: React.FormEvent) => {
    try{
      e.preventDefault();
      console.log("Nova transação criada:", formData);

      await api.post("/api/transactions", { ...formData });
      
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("/api/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    };
  
    fetchCategories();
  }, []);
  
  useEffect(() =>{
    console.log(categories)
  }, [categories])

  useEffect(() =>{
    console.log(`form: ${JSON.stringify(formData)}`)
  }, [formData])

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <h2>Nova Transação</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Título*:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Título da transação"
              required
            />
          </label>

          <label>
            Valor*:
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Tipo*:
            <select name="type" value={formData.type} onChange={handleChange}>
              <option value={TransactionTypes.EXPENSE}>Despesa</option>
              <option value={TransactionTypes.INCOME}>Receita</option>
            </select>
          </label>

          <label>
            Categoria*:
            <select name="categoryId" value={formData.categoryId} onChange={handleChange}>
              {categories.map((cat) => (
                <option value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </label>

          <label>
            Data*:
            <input
              type="date"
              name="transactionDate"
              value={formData.transactionDate}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Descrição:
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Descrição da transação"
            />
          </label>

          <div>
            <button type="submit">Adicionar</button>
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default TransactionModal;
