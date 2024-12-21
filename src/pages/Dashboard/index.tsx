import { useEffect, useState } from "react";
import * as S from "./styles";
import { TransactionModel } from "../../models/TransactionModel";
import api from "../../services/api";
import { TransactionTypes } from "../../enums";
import Button from "../../components/Button";
import TransactionModal from "../../components/CreateTransaction";
import TransactionList from "../../components/TransactionsList";
import { CategoryModel } from "../../models";
import BalanceCard from "../../components/BalanceCard";
import { FaPlus } from "react-icons/fa";

const Dashboard = () => {
  const [userData, setUserData] = useState({
    name: "",
    balance: 0,
  });
  const [transactions, setTransactions] = useState<TransactionModel[]>([]);
  const [selectedTransaction, setSelectedTransaction] = useState<TransactionModel | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState<CategoryModel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await api.get("/api/users/me");
        const transactionsResponse = await api.get("/api/transactions");
        const categoriesResponse = await api.get("/api/categories");

        setUserData(userResponse.data);
        setTransactions(transactionsResponse.data);
        setCategories(categoriesResponse.data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setErrorMessage("Erro ao carregar dados. Tente novamente mais tarde.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <S.Loader>Carregando...</S.Loader>;
  }

  if (errorMessage) {
    return <S.ErrorMessage>{errorMessage}</S.ErrorMessage>;
  }

  return (
    <S.Container>
      <S.Navbar>
        <S.NavItem>Home</S.NavItem>
        <S.NavItem>Transações</S.NavItem>
        <S.NavItem>Sair</S.NavItem>
      </S.Navbar>

      <S.Content>
        <S.TransactionHeader>
          <BalanceCard balance={userData.balance}></BalanceCard>
          <S.NewTransactionButton>
            <Button onClick={() => setIsModalOpen(true)} color="#4caf50">
              <FaPlus /> Nova Transação
            </Button>
          </S.NewTransactionButton>
        </S.TransactionHeader>

        <TransactionList
          transactions={transactions}
          onSelectTransaction={(transaction) => setSelectedTransaction(transaction)}
        />
      </S.Content>

      {selectedTransaction && (
        <S.Modal>
          <S.ModalContent>
            <h2>Detalhes da Transação</h2>
            <p>Título: {selectedTransaction.title}</p>
            <p>Quantia: R$ {selectedTransaction.amount.toFixed(2)}</p>
            <p>Tipo: {selectedTransaction.type === TransactionTypes.EXPENSE ? "Despesa" : "Receita"}</p>
            <p>Categoria: {selectedTransaction.category?.name}</p>
            <p>Data: {new Date(selectedTransaction.createdAt).toLocaleDateString()}</p>
            {selectedTransaction.description && (
              <p>Descrição: {selectedTransaction.description}</p>
            )}
            <S.CloseButton onClick={() => setSelectedTransaction(null)}>Fechar</S.CloseButton>
          </S.ModalContent>
        </S.Modal>
      )}

      {isModalOpen && <TransactionModal categories={categories} onClose={() => setIsModalOpen(false)} />}
    </S.Container>
  );
};

export default Dashboard;
