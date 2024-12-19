import { TransactionTypes } from "../enums";
import { CategoryModel } from "./CategoryModel";

export type TransactionModel = {
  id              : number;
  title           : string;
  amount          : number;
  type            : TransactionTypes;
  description?    : string;
  transactionDate : Date;
  createdAt       : Date;
  updatedAt       : Date;
  userId          : number;
  categoryId      : number;

  category?       : CategoryModel;
}