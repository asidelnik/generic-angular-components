import { FieldsData } from '../../interfaces/IGenericTableAndForm';
import { ILoanType } from '../../interfaces/ILoanType';

type LoanTypesFieldsDataType = FieldsData<ILoanType>;
export const loanTypesFieldsData: LoanTypesFieldsDataType = {
  id: {
    type: 'number',
    tableColumn: {
      label: 'ID',
      name: 'id',
      order: 1,
      isSortable: false,
      pipe: 'string',
    },
    formField: {
      label: 'ID',
      type: 'number',
      required: true,
    },
    tableFilterField: null,
  },
  name: {
    type: 'string',
    tableColumn: {
      label: 'Name',
      name: 'name',
      order: 2,
      isSortable: false,
      pipe: 'string',
    },
    formField: {
      label: 'Name',
      type: 'text',
      required: true,
    },
    tableFilterField: {
      label: 'Name',
      type: 'text',
      required: true,
    },
  },
  description: {
    type: 'string',
    tableColumn: {
      label: 'Description',
      name: 'description',
      order: 3,
      isSortable: false,
      pipe: 'string',
    },
    formField: {
      label: 'Description',
      type: 'text',
      required: true,
    },
    tableFilterField: {
      label: 'Description',
      type: 'text',
      required: true,
    },
  },
  interestRate: {
    type: 'number',
    tableColumn: {
      label: 'Interest Rate',
      name: 'interestRate',
      order: 4,
      isSortable: false,
      pipe: 'decimal',
    },
    formField: {
      label: 'Interest Rate',
      type: 'number',
      required: true,
    },
    tableFilterField: {
      label: 'Interest Rate',
      type: 'number',
      required: true,
    },
  },
  maxAmount: {
    type: 'number',
    tableColumn: {
      label: 'Max Amount',
      name: 'maxAmount',
      order: 5,
      isSortable: false,
      pipe: 'currency',
    },
    formField: {
      label: 'Max Amount',
      type: 'number',
      required: true,
    },
    tableFilterField: {
      label: 'Max Amount',
      type: 'number',
      required: true,
    },
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
    formField: {
      label: 'Min Amount',
      type: 'number',
      required: true,
    },
    tableFilterField: {
      label: 'Min Amount',
      type: 'number',
      required: true,
    },
  },
  maxPeriod: {
    type: 'number',
    tableColumn: {
      label: 'Max Period',
      name: 'maxPeriod',
      order: 7,
      isSortable: false,
      pipe: 'string',
    },
    formField: {
      label: 'Max Period',
      type: 'number',
      required: true,
    },
    tableFilterField: {
      label: 'Max Period',
      type: 'number',
      required: true,
    },
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
  status: {
    type: 'boolean',
    tableColumn: {
      label: 'Status',
      name: 'status',
      order: 9,
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
      order: 10,
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
      order: 11,
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
