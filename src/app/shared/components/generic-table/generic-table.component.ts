import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DataUnionType } from '../../../interfaces/union';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
} from '@angular/common';
import { ITableColumn } from '../../../interfaces/IGenericTableAndForm';

@Component({
  selector: 'app-generic-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatProgressSpinnerModule, DatePipe],
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss',
})
export class GenericTableComponent implements OnInit, OnChanges, OnDestroy {
  @Input() columns: ITableColumn[] = [];
  @Input() data: DataUnionType[] = [];
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<DataUnionType> = new MatTableDataSource();
  isLoading = true;

  constructor(
    private datePipe: DatePipe,
    private currencyPipe: CurrencyPipe,
    private decimalPipe: DecimalPipe
  ) {}

  ngOnInit() {
    this.displayedColumns = this.columns
      .sort((a, b) => a.order - b.order)
      .map((field) => field.label);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.dataSource = new MatTableDataSource(this.data);
      if (this.data.length > 0) this.isLoading = false;
    }
  }

  transformData(column: ITableColumn, data: any): any {
    if (column.pipe === 'string') {
      return data;
    } else if (column.pipe === 'date') {
      return this.datePipe.transform(data, 'MM/dd/yyyy');
    } else if (column.pipe === 'currency') {
      return this.currencyPipe.transform(data, 'USD');
    } else if (column.pipe === 'decimal') {
      return this.decimalPipe.transform(data, '1.2-2');
    }

    return data;
  }

  ngOnDestroy() {
    this.dataSource = new MatTableDataSource();
  }
}
