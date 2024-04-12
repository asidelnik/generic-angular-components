export interface ILoanRequest {
  id: number;
  userId: string;
  loanTypeId: number;
  subLoanTypeId: number;
  amount: number;
  period: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
