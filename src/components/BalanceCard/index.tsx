import { BalanceCardProps } from "./types";
import * as S from './styles';

const BalanceCard: React.FC<BalanceCardProps> = ({
  balance
}) => {
  return (
    <S.Card>
      <h2>Saldo Total</h2>
      <p>R$ {balance.toFixed(2)}</p>
    </S.Card>
  )
}

export default BalanceCard;