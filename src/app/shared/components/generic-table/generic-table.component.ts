import { Component, Input, OnInit } from '@angular/core';
import { TableColumn } from '../../../interfaces/tableColumn';

@Component({
  selector: 'app-generic-table',
  standalone: true,
  imports: [],
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss',
})
export class GenericTableComponent implements OnInit {
  @Input() data: any[];
  @Input() columns: TableColumn[];

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;

  ngOnInit() {
    this.displayedColumns = this.columns
      .sort((a, b) => a.order - b.order)
      .map((column) => column.name);
    this.dataSource = new MatTableDataSource(this.data);
  }
}
