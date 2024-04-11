import { Component, Input, OnInit } from '@angular/core';
import { TableColumn } from '../../../interfaces/tableColumn';
import { DataUnionType } from '../../../interfaces/union';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
} from '@angular/common';

@Component({
  selector: 'app-generic-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, DatePipe],
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss',
})
export class GenericTableComponent implements OnInit {
  @Input() columns: TableColumn[] = [];
  @Input() data: DataUnionType[] = [];

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<DataUnionType> = new MatTableDataSource();

  constructor(
    private datePipe: DatePipe,
    private currencyPipe: CurrencyPipe,
    private decimalPipe: DecimalPipe
  ) {}

  ngOnInit() {
    this.displayedColumns = this.columns
      .sort((a, b) => a.order - b.order)
      .map((column) => column.name);
    this.dataSource = new MatTableDataSource(this.data);
  }

  transformData(column: TableColumn, data: any): any {
    if (column.pipe === 'string') {
      return data;
    } else if (column.pipe === 'date') {
      return this.datePipe.transform(data, 'shortDate');
    } else if (column.pipe === 'currency') {
      return this.currencyPipe.transform(data, 'USD');
    } else if (column.pipe === 'decimal') {
      return this.decimalPipe.transform(data, '1.2-2');
    }

    return data;
  }
}
