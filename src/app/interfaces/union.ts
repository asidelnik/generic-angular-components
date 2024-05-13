import { ILoanRequest } from './ILoanRequest';
import { ILoanType } from './ILoanType';
import { ISubLoanType } from './ISubLoanType';

export type IDataUnion = ILoanType | ISubLoanType | ILoanRequest;

export interface IData {
  data: IDataUnion[];
  items: number;
  first: number;
  last: number;
  pages: number;
  next: number | null;
  prev: number | null;
}

