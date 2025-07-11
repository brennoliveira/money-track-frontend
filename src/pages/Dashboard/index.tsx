import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import BalanceCard from "../../components/BalanceCard";
import Button from "../../components/Button";
import TransactionModal from "../../components/CreateTransaction";
import TransactionList from "../../components/TransactionsList";
import { CategoryModel } from "../../models";
import { TransactionModel } from "../../models/TransactionModel";
import api from "../../services/api";
import * as S from "./styles";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  
  const [userData, setUserData] = useState({
    name: "",
    balance: 0,
  });
  const [transactions, setTransactions] = useState<TransactionModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState<CategoryModel[]>([]);

  const handleLogout = () => {
    window.localStorage.clear();
    navigate('/');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await api.get("/api/users/me");
        const userBalance = await api.get("/api/users/me/balance");
        const transactionsResponse = await api.get("/api/transactions");
        const categoriesResponse = await api.get("/api/categories");
        setUserData({
          name: userResponse.data.data.name,
          balance: userBalance.data.data.balance,
        });
        setTransactions(transactionsResponse.data.data);
        setCategories(categoriesResponse.data.data);
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
      <Navbar onLogout={handleLogout} userName={userData.name} />

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
        />
      </S.Content>


      {isModalOpen && <TransactionModal categories={categories} onClose={() => setIsModalOpen(false)} />}
    </S.Container>
  );
};

export default Dashboard;
