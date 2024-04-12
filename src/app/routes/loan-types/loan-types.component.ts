import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data/data.service';
import { ILoanType } from '../../interfaces/loanType';
import { GenericTableComponent } from '../../shared/components/generic-table/generic-table.component';
import { TableColumn } from '../../interfaces/tableColumn';
import { loanTypesColumns } from '../../constants/table-columns/loanTypesColumns';

@Component({
  selector: 'app-loan-types',
  standalone: true,
  templateUrl: './loan-types.component.html',
  styleUrl: './loan-types.component.scss',
  imports: [GenericTableComponent],
})
export class LoanTypesComponent implements OnInit {
  tableData: ILoanType[] = [];
  tableColumns: TableColumn[] = loanTypesColumns;
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService.fetchLoanTypes().subscribe((loanTypes: ILoanType[]) => {
      this.tableData = loanTypes;
    });
  }
}
