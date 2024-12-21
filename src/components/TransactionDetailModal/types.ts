import { TransactionModel } from "../../models";

export interface TransactionDetailModalProps {
  transaction: TransactionModel;
  onClose: () => void;
}