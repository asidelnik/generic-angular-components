export interface ISubLoanType {
  id: number;
  loanTypeId: number;
  name: string;
  description: string;
  interestRate: number;
  minAmount: number;
  maxAmount: number;
  minPeriod: number;
  maxPeriod: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
