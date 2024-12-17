import { TransactionTypes } from "../enums";
import { CategoryModel } from "./CategoryModel";

export type TransactionModel = {
  id         : number;
  amount     : number;
  type       : TransactionTypes;
  createdAt  : Date;
  updatedAt  : Date;
  userId     : number;
  categoryId : number;

  category?  : CategoryModel;
}