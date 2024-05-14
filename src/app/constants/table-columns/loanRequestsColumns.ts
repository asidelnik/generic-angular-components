import { FieldsData } from '../../interfaces/IGenericTableAndForm';
import { ILoanRequest } from '../../interfaces/ILoanRequest';

export const loanRequestsColumns: FieldsData<ILoanRequest> = {
  id: {
    type: 'number',
    tableColumn: {
      label: 'ID',
      name: 'id',
      order: 1,
      isSortable: false,
      pipe: 'string',
    },
    formField: null,
    tableFilterField: null,
  },
  userId: {
    type: 'string',
    tableColumn: {
      label: 'User ID',
      name: 'userId',
      order: 2,
      isSortable: false,
      pipe: 'string',
    },
    formField: {
      label: 'User ID',
      name: 'userId',
      type: 'autocomplete',
      required: true,
    },
    tableFilterField: null,
  },
  loanTypeId: {
    type: 'number',
    tableColumn: {
      label: 'Loan Type ID',
      name: 'loanTypeId',
      order: 3,
      isSortable: false,
      pipe: 'string',
    },
    formField: {
      label: 'Loan Type ID',
      name: 'loanTypeId',
      type: 'autocomplete',
      required: true,
    },
    tableFilterField: null,
  },
  subLoanTypeId: {
    type: 'number',
    tableColumn: {
      label: 'Sub Loan Type ID',
      name: 'subLoanTypeId',
      order: 4,
      isSortable: false,
      pipe: 'string',
    },
    formField: {
      label: 'Sub Loan Type ID',
      name: 'subLoanTypeId',
      type: 'autocomplete',
      required: true,
    },
    tableFilterField: null,
  },
  amount: {
    type: 'number',
    tableColumn: {
      label: 'Amount',
      name: 'amount',
      order: 5,
      isSortable: false,
      pipe: 'currency',
    },
    formField: {
      label: 'Amount',
      name: 'amount',
      type: 'number',
      required: true,
    },
    tableFilterField: null,
  },
  period: {
    type: 'number',
    tableColumn: {
      label: 'Period',
      name: 'period',
      order: 6,
      isSortable: false,
      pipe: 'string',
    },
    formField: {
      label: 'Period',
      name: 'period',
      type: 'number',
      required: true,
    },
    tableFilterField: null,
  },
  isActive: {
    type: 'string',
    tableColumn: {
      label: 'Is Active',
      name: 'isActive',
      order: 7,
      isSortable: false,
      pipe: 'isActive',
    },
    formField: {
      label: 'Is Active',
      name: 'isActive',
      type: 'text',
      required: true,
    },
    tableFilterField: null,
  },
  createdAt: {
    type: 'date',
    tableColumn: {
      label: 'Created At',
      name: 'createdAt',
      order: 10,
      isSortable: false,
      pipe: 'date',
    },
    formField: null,
    tableFilterField: {
      label: 'Created At',
      type: 'date',
      required: true,
    },
  },
  updatedAt: {
    type: 'date',
    tableColumn: {
      label: 'Updated At',
      name: 'updatedAt',
      order: 11,
      isSortable: false,
      pipe: 'date',
    },
    formField: null,
    tableFilterField: {
      label: 'Updated At',
      type: 'date',
      required: true,
    },
  },
};
