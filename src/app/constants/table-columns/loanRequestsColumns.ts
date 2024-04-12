import { TableColumn } from '../../interfaces/tableColumn';

export const loanRequestsColumns: TableColumn[] = [
  {
    name: 'id',
    label: 'ID',
    order: 1,
    isSortable: false,
    pipe: 'string',
  },
  {
    name: 'userId',
    label: 'User ID',
    order: 2,
    isSortable: false,
    pipe: 'string',
  },
  {
    name: 'loanTypeId',
    label: 'Loan Type ID',
    order: 3,
    isSortable: false,
    pipe: 'string',
  },
  {
    name: 'subLoanTypeId',
    label: 'Sub Loan Type ID',
    order: 4,
    isSortable: false,
    pipe: 'string',
  },
  {
    name: 'amount',
    label: 'Amount',
    order: 5,
    isSortable: false,
    pipe: 'currency',
  },
  {
    name: 'period',
    label: 'Period',
    order: 6,
    isSortable: false,
    pipe: 'string',
  },
  {
    name: 'status',
    label: 'Status',
    order: 7,
    isSortable: false,
    pipe: 'string',
  },
  {
    name: 'createdAt',
    label: 'Created At',
    order: 8,
    isSortable: false,
    pipe: 'date',
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    order: 9,
    isSortable: false,
    pipe: 'date',
  },
];
