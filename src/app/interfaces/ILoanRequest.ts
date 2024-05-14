export interface ILoanRequest {
  id: number;
  userId: string;
  loanTypeId: number;
  subLoanTypeId: number;
  amount: number;
  period: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
