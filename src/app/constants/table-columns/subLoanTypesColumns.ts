import { FieldsData } from '../../interfaces/IGenericTableAndForm';
import { ISubLoanType } from '../../interfaces/ISubLoanType';

export const subLoanTypesColumns: FieldsData<ISubLoanType> = {
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
  loanTypeId: {
    type: 'number',
    tableColumn: {
      label: 'Loan Type ID',
      name: 'loanTypeId',
      order: 2,
      isSortable: false,
      pipe: 'string',
    },
    formField: null,
    tableFilterField: null,
  },
  name: {
    type: 'string',
    tableColumn: {
      label: 'Name',
      name: 'name',
      order: 3,
      isSortable: false,
      pipe: 'string',
    },
    formField: null,
    tableFilterField: null,
  },
  description: {
    type: 'string',
    tableColumn: {
      label: 'Description',
      name: 'description',
      order: 4,
      isSortable: false,
      pipe: 'string',
    },
    formField: null,
    tableFilterField: null,
  },
  interestRate: {
    type: 'number',
    tableColumn: {
      label: 'Interest Rate',
      name: 'interestRate',
      order: 5,
      isSortable: false,
      pipe: 'decimal',
    },
    formField: null,
    tableFilterField: null,
  },
  minAmount: {
    type: 'number',
    tableColumn: {
      label: 'Min Amount',
      name: 'minAmount',
      order: 6,
      isSortable: false,
      pipe: 'currency',
    },
    formField: null,
    tableFilterField: null,
  },
  maxAmount: {
    type: 'number',
    tableColumn: {
      label: 'Max Amount',
      name: 'maxAmount',
      order: 7,
      isSortable: false,
      pipe: 'currency',
    },
    formField: null,
    tableFilterField: null,
  },
  minPeriod: {
    type: 'number',
    tableColumn: {
      label: 'Min Period',
      name: 'minPeriod',
      order: 8,
      isSortable: false,
      pipe: 'string',
    },
    formField: {
      label: 'Min Period',
      type: 'number',
      required: true,
    },
    tableFilterField: {
      label: 'Min Period',
      type: 'number',
      required: true,
    },
  },
  maxPeriod: {
    type: 'number',
    tableColumn: {
      label: 'Max Period',
      name: 'maxPeriod',
      order: 9,
      isSortable: false,
      pipe: 'string',
    },
    formField: null,
    tableFilterField: null,
  },
  status: {
    type: 'boolean',
    tableColumn: {
      label: 'Status',
      name: 'status',
      order: 10,
      isSortable: false,
      pipe: 'string',
    },
    formField: {
      label: 'Status',
      type: 'checkbox',
      required: true,
    },
    tableFilterField: {
      label: 'Status',
      type: 'checkbox',
      required: true,
    },
  },
  createdAt: {
    type: 'date',
    tableColumn: {
      label: 'Created At',
      name: 'createdAt',
      order: 11,
      isSortable: false,
      pipe: 'date',
    },
    formField: {
      label: 'Created At',
      type: 'date',
      required: true,
    },
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
      order: 12,
      isSortable: false,
      pipe: 'date',
    },
    formField: {
      label: 'Updated At',
      type: 'date',
      required: true,
    },
    tableFilterField: {
      label: 'Updated At',
      type: 'date',
      required: true,
    },
  },
};
