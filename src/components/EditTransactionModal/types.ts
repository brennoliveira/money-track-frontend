import { TransactionModel } from "../../models";

export interface EditTransactionModalProps {
  transaction : TransactionModel;
  // categories  : CategoryModel[];
  onClose     : () => void;
  onSave      : () => void;
}