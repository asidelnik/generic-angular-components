import { ILoanRequest } from './ILoanRequest';
import { ILoanType } from './ILoanType';
import { ISubLoanType } from './ISubLoanType';

export type DataUnionType = ILoanType | ISubLoanType | ILoanRequest;
