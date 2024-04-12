export interface TableColumn {
  name: string;
  label: string;
  order: number;
  isSortable: boolean;
  pipe: 'string' | 'date' | 'currency' | 'decimal';
}
