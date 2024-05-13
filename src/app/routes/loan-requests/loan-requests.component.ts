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
  data: IData = { items: [], count: 0 };
  tableColumns: ITableColumn[] = Object.values(loanRequestsColumns).map(
    (value) => value.tableColumn
  );
  dataSubscription: Subscription = new Subscription();

  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataSubscription = this.dataService
      .fetchLoanRequests()
      .subscribe((data: IData) => {
        this.data = data;
      });
  }

  updatePage(page: number) {
    this.dataService.page = page;
    this.dataSubscription = this.dataService
      .fetchLoanRequests()
      .subscribe((data: IData) => {
        this.data = data;
      });
  }
  updatePerPage(perPage: number) {
    this.dataService.perPage = perPage;
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
