import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data/data.service';
import { ISubLoanType } from '../../interfaces/subLoanType';
import { GenericTableComponent } from '../../shared/components/generic-table/generic-table.component';
import { TableColumn } from '../../interfaces/tableColumn';

@Component({
  selector: 'app-sub-loan-types',
  standalone: true,
  imports: [GenericTableComponent],
  templateUrl: './sub-loan-types.component.html',
  styleUrl: './sub-loan-types.component.scss',
})
export class SubLoanTypesComponent implements OnInit {
  tableData: ISubLoanType[] = [];
  tableColumns: TableColumn[] = loanRequestColumns;
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService
      .fetchSubLoanTypes()
      .subscribe((subLoanTypes: ISubLoanType[]) => {
        this.tableData = subLoanTypes;
      });
  }
}
