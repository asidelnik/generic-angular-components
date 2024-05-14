export interface ITableColumn {
  label: string;
  name: string;
  order: number;
  isSortable: boolean;
  pipe: 'string' | 'date' | 'currency' | 'decimal' | 'isActive';
}

export interface ITableFilterField {
  label: string;
  type: 'text' | 'select' | 'checkbox' | 'date' | 'number' | 'radio';
  options?: string[];
  value?: string;
  required: boolean;
  // dependentField?: string;
  // dependentValue?: string;
  // showIfDependentFieldValidated?: string;
  // enableIfDependentFieldNotValidated?: string;
}

export interface IFormField {
  label: string;
  name: string;
  type:
    | 'text'
    | 'select'
    | 'autocomplete'
    | 'checkbox'
    | 'date'
    | 'number'
    | 'radio'
    | 'textarea';
  required: boolean;
  options?: string[];
  value?: string;
  validators?: any[];
  dependentField?: string;
  dependentCondition?: 'greater' | 'less' | 'equal';
}

export interface IField {
  type: 'number' | 'string' | 'boolean' | 'date';
  tableColumn: ITableColumn;
  formField: IFormField | null;
  tableFilterField: ITableFilterField | null;
}

export type FieldsData<T> = {
  [K in keyof T]: IField;
};
