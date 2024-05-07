export interface ISubLoanType {
  id: number;
  loanTypeId: number;
  name: string;
  description: string;
  interestRate: number;
  maxAmount: number;
  minAmount: number;
  maxPeriod: number;
  minPeriod: number;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
}
