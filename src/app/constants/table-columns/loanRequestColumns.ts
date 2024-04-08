import { TableColumn } from '../../interfaces/tableColumn';

export const loanRequestColumns: TableColumn[] = [
  {
    name: 'id',
    label: 'ID',
    order: 1,
    isSortable: true,
  },
  {
    name: 'name',
    label: 'Name',
    order: 2,
    isSortable: true,
  },
  {
    name: 'amount',
    label: 'Amount',
    order: 3,
    isSortable: false,
  },
  {
    name: 'status',
    label: 'Status',
    order: 4,
    isSortable: false,
  },
  {
    name: 'date',
    label: 'Date',
    order: 5,
    isSortable: false,
  },
  {
    name: 'actions',
    label: 'Actions',
    order: 6,
    isSortable: false,
  },
];
