import { ILoanRequest } from './loanRequest';
import { ILoanType } from './loanType';
import { ISubLoanType } from './subLoanType';

export type DataUnionType = ILoanType | ISubLoanType | ILoanRequest;
