import { Component, Input, OnInit } from '@angular/core';
import { TableColumn } from '../../../interfaces/tableColumn';
import { DataUnionType } from '../../../interfaces/union';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-generic-table',
  standalone: true,
  imports: [],
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss',
})
export class GenericTableComponent implements OnInit {
  @Input() columns: TableColumn[] = [];
  @Input() data: DataUnionType[] = [];

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<DataUnionType> | undefined;

  ngOnInit() {
    this.displayedColumns = this.columns
      .sort((a, b) => a.order - b.order)
      .map((column) => column.name);
    this.dataSource = new MatTableDataSource(this.data);
  }
}
