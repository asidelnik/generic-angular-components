import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
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
import {
  FieldsData,
  IFormField,
  ITableColumn,
} from '../../../interfaces/IGenericTableAndForm';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { DataService } from '../../services/data/data.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-generic-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    DatePipe,
    MatPaginatorModule,
    MatButtonModule,
  ],
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss',
})
export class GenericTableComponent implements OnChanges, OnDestroy {
  @Input() metaData: FieldsData<IDataUnion> | undefined = undefined;
  columns: ITableColumn[] = [];
  formFields: IFormField[] = [];
  @Input() data: IData = {
    data: [],
    items: 0,
    first: 0,
    last: 0,
    pages: 0,
    next: null,
    prev: null,
  };
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<IDataUnion> = new MatTableDataSource();
  @Output() getPaginatedData: EventEmitter<void> = new EventEmitter<void>();

  isLoading = true;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private datePipe: DatePipe,
    private currencyPipe: CurrencyPipe,
    private decimalPipe: DecimalPipe,
    private dataService: DataService
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator.page.subscribe((pageEvent: PageEvent) => {
      this.dataService.perPage = pageEvent.pageSize;
      this.dataService.page = pageEvent.pageIndex + 1;
      this.getPaginatedData.emit();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.dataSource = new MatTableDataSource(this.data.data);
      if (this.data?.data?.length > 0) this.isLoading = false;
    }
    if (changes['metaData'] && this.metaData) {
      this.columns = Object.values(this.metaData).map(
        (value) => value.tableColumn
      );

      this.formFields = Object.values(this.metaData)
        .filter((v) => v.formField)
        .map((value) => value.formField as IFormField);

      this.displayedColumns = this.columns
        .sort((a, b) => a.order - b.order)
        .map((field) => field.label);
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

  openAddPanel() {
    console.log('Add Panel Opened');
  }

  ngOnDestroy() {
    this.dataSource = new MatTableDataSource();
  }
}
