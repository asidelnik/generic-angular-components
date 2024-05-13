import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data/data.service';
import { ILoanType } from '../../interfaces/ILoanType';
import { GenericTableComponent } from '../../shared/components/generic-table/generic-table.component';
import { loanTypesFieldsData } from '../../constants/table-columns/loanTypesColumns';
import { Subscription } from 'rxjs';
import { ITableColumn } from '../../interfaces/IGenericTableAndForm';
import { IData } from '../../interfaces/union';

@Component({
  selector: 'app-loan-types',
  standalone: true,
  templateUrl: './loan-types.component.html',
  styleUrl: './loan-types.component.scss',
  imports: [GenericTableComponent],
})
export class LoanTypesComponent implements OnInit, OnDestroy {
  data: IData = { items: [], count: 0 };

  tableColumns: ITableColumn[] = Object.values(loanTypesFieldsData).map(
    (value) => value.tableColumn
  );
  dataSubscription: Subscription = new Subscription();

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataSubscription = this.dataService
      .fetchLoanTypes()
      .subscribe((data: IData) => {
        this.data = data;
      });
  }

  updatePage(page: number) {
    this.dataService.page = page;
    this.dataSubscription = this.dataService
      .fetchLoanTypes()
      .subscribe((data: IData) => {
        this.data = data;
      });
  }

  updatePerPage(perPage: number) {
    this.dataService.perPage = perPage;
    this.dataSubscription = this.dataService
      .fetchLoanTypes()
      .subscribe((data: IData) => {
        this.data = data;
      });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}
