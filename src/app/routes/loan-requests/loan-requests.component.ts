import { Component, OnInit } from '@angular/core';
import { ILoanRequest } from '../../interfaces/loanRequest';
import { DataService } from '../../shared/services/data/data.service';
import { GenericTableComponent } from '../../shared/components/generic-table/generic-table.component';
import { TableColumn } from '../../interfaces/tableColumn';
import { loanRequestColumns } from '../../constants/table-columns/loanRequestColumns';

@Component({
  selector: 'app-loan-requests',
  standalone: true,
  imports: [GenericTableComponent],
  templateUrl: './loan-requests.component.html',
  styleUrl: './loan-requests.component.scss',
})
export class LoanRequestsComponent implements OnInit {
  tableData: ILoanRequest[] = [];
  tableColumns: TableColumn[] = loanRequestColumns;

  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService
      .fetchLoanRequests()
      .subscribe((loanRequests: ILoanRequest[]) => {
        this.tableData = loanRequests;
      });
  }
}
