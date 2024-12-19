import { TransactionModel } from "../../models";

export interface TransactionListProps {
  transactions: TransactionModel[];
  onSelectTransaction: (transaction: TransactionModel) => void;
}