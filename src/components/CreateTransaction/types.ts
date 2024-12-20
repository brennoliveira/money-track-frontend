import { CategoryModel } from "../../models";

export interface TransactionModalProps {
  onClose    : () => void;
  categories : CategoryModel[];
}