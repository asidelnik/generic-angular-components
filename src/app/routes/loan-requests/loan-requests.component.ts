import { Component, OnDestroy, OnInit } from '@angular/core';
import { ILoanRequest } from '../../interfaces/loanRequest';
import { DataService } from '../../shared/services/data/data.service';
import { GenericTableComponent } from '../../shared/components/generic-table/generic-table.component';
import { TableColumn } from '../../interfaces/tableColumn';
import { loanRequestsColumns } from '../../constants/table-columns/loanRequestsColumns';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loan-requests',
  standalone: true,
  imports: [GenericTableComponent],
  templateUrl: './loan-requests.component.html',
  styleUrl: './loan-requests.component.scss',
})
export class LoanRequestsComponent implements OnInit, OnDestroy {
  tableData: ILoanRequest[] = [];
  tableColumns: TableColumn[] = loanRequestsColumns;
  dataSubscription: Subscription = new Subscription();

  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataSubscription = this.dataService
      .fetchLoanRequests()
      .subscribe((loanRequests: ILoanRequest[]) => {
        this.tableData = loanRequests;
      });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}
