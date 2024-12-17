import { useEffect, useState } from "react";
import * as S from "./styles";
import { TransactionModel } from "../../models/TransactionModel";
import api from "../../services/api";
import { TransactionTypes } from "../../enums";

const Dashboard = () => {
  const [userData, setUserData] = useState({
    name: "",
    balance: 0,
  });
  const [transactions, setTransactions] = useState<TransactionModel[]>([]);
  const [selectedTransaction, setSelectedTransaction] = useState<TransactionModel | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await api.get("/api/users/me");
        const transactionsResponse = await api.get("/api/transactions");

        setUserData(userResponse.data);
        setTransactions(transactionsResponse.data);
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
        <S.BalanceCard>
          <h2>Saldo Total</h2>
          <p>R$ {userData.balance.toFixed(2)}</p>
        </S.BalanceCard>

        <S.TransactionsWrapper>
          <h2>Transações</h2>
          <S.TransactionsList>
            {transactions.map((transaction) => (
              <S.TransactionItem
                key={transaction.id}
                onClick={() => setSelectedTransaction(transaction)}
                isExpense={transaction.type === TransactionTypes.EXPENSE}
              >
                <p>Data: {new Date(transaction.createdAt).toLocaleDateString()}</p>
                <p className="amount">R$ {transaction.amount.toFixed(2)}</p>
                <p>Categoria: {transaction.category?.name}</p>
              </S.TransactionItem>
            ))}
          </S.TransactionsList>
        </S.TransactionsWrapper>
      </S.Content>

      {selectedTransaction && (
        <S.Modal>
          <S.ModalContent>
            <h2>Detalhes da Transação</h2>
            <p>Quantia: R$ {selectedTransaction.amount.toFixed(2)}</p>
            <p>Tipo: {selectedTransaction.type === TransactionTypes.EXPENSE ? "Despesa" : "Receita"}</p>
            <p>Categoria: {selectedTransaction.category?.name}</p>
            <p>Data: {new Date(selectedTransaction.createdAt).toLocaleDateString()}</p>
            <S.CloseButton onClick={() => setSelectedTransaction(null)}>Fechar</S.CloseButton>
          </S.ModalContent>
        </S.Modal>
      )}
    </S.Container>
  );
};

export default Dashboard;
