import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { IData, IDataUnion } from '../../../interfaces/union';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
} from '@angular/common';
import { ITableColumn } from '../../../interfaces/IGenericTableAndForm';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';

@Component({
  selector: 'app-generic-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    DatePipe,
    MatPaginatorModule,
  ],
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss',
})
export class GenericTableComponent implements OnInit, OnChanges, OnDestroy {
  @Input() columns: ITableColumn[] = [];
  @Input() data: IData = { items: [], count: 0 };
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<IDataUnion> = new MatTableDataSource();
  @Output() page = new EventEmitter<number>();

  @Output() perPage = new EventEmitter<number>();
  isLoading = true;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator.page.subscribe((pageEvent: PageEvent) => {
      this.page.emit(pageEvent.pageIndex);
      this.perPage.emit(pageEvent.pageSize);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.dataSource = new MatTableDataSource(this.data.items);
      if (this.data.items.length > 0) this.isLoading = false;
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
