import { ILoanRequest } from './ILoanRequest';
import { ILoanType } from './ILoanType';
import { ISubLoanType } from './ISubLoanType';

export interface IData {
  items: Array<IDataUnion>;
  count: number;
}
export type IDataUnion = ILoanType | ISubLoanType | ILoanRequest;


