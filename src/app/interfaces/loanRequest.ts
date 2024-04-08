export interface ILoanRequest {
  id: number;
  userId: number;
  loanTypeId: number;
  subLoanTypeId: number;
  amount: number;
  period: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
