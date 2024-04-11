import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';

export interface TableColumn {
  name: string;
  label: string;
  order: number;
  isSortable: boolean;
  isPipe: boolean;
  pipe: 'string' | 'date' | 'currency' | 'decimal';
}
