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
    formField: {
      label: 'Loan Type ID',
      name: 'loanTypeId',
      type: 'autocomplete',
      required: true,
    },
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
    formField: {
      label: 'Name',
      name: 'name',
      type: 'text',
      required: true,
    },
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
    formField: {
      label: 'Description',
      name: 'description',
      type: 'text',
      required: true,
    },
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
    formField: {
      label: 'Interest Rate',
      name: 'interestRate',
      type: 'number',
      required: true,
    },
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
    formField: {
      label: 'Min Amount',
      name: 'minAmount',
      type: 'number',
      required: true,
    },
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
    formField: {
      label: 'Max Amount',
      name: 'maxAmount',
      type: 'number',
      required: true,
      dependentField: 'minAmount',
      dependentCondition: 'greater',
    },
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
      name: 'minPeriod',
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
    formField: {
      label: 'Max Period',
      name: 'maxPeriod',
      type: 'number',
      required: true,
      dependentField: 'minPeriod',
      dependentCondition: 'greater',
    },
    tableFilterField: null,
  },
  isActive: {
    type: 'boolean',
    tableColumn: {
      label: 'Is Active',
      name: 'isActive',
      order: 10,
      isSortable: false,
      pipe: 'isActive',
    },
    formField: {
      label: 'Is Active',
      name: 'isActive',
      type: 'checkbox',
      required: true,
    },
    tableFilterField: {
      label: 'Is Active',
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
      order: 12,
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
