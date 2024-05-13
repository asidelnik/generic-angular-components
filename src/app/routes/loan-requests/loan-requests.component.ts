import { Component, OnDestroy, OnInit } from '@angular/core';
import { ILoanRequest } from '../../interfaces/ILoanRequest';
import { DataService } from '../../shared/services/data/data.service';
import { GenericTableComponent } from '../../shared/components/generic-table/generic-table.component';
import { loanRequestsColumns } from '../../constants/table-columns/loanRequestsColumns';
import { Subscription } from 'rxjs';
import { ITableColumn } from '../../interfaces/IGenericTableAndForm';
import { IData } from '../../interfaces/union';

@Component({
  selector: 'app-loan-requests',
  standalone: true,
  imports: [GenericTableComponent],
  templateUrl: './loan-requests.component.html',
  styleUrl: './loan-requests.component.scss',
})
export class LoanRequestsComponent implements OnInit, OnDestroy {
  data: IData = {
    data: [],
    items: 0,
    first: 0,
    last: 0,
    pages: 0,
    next: null,
    prev: null,
  };
  tableColumns: ITableColumn[] = Object.values(loanRequestsColumns).map(
    (value) => value.tableColumn
  );
  dataSubscription: Subscription = new Subscription();

  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService.page = 1;
    this.dataSubscription = this.dataService
      .fetchLoanRequests()
      .subscribe((data: IData) => {
        this.data = data;
      });
  }

  getPaginatedData() {
    this.dataSubscription = this.dataService
      .fetchLoanRequests()
      .subscribe((data: IData) => {
        this.data = data;
      });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}
