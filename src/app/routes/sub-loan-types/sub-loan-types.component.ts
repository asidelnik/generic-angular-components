import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data/data.service';
import { ISubLoanType } from '../../interfaces/ISubLoanType';
import { GenericTableComponent } from '../../shared/components/generic-table/generic-table.component';
import { subLoanTypesColumns } from '../../constants/table-columns/subLoanTypesColumns';
import { Subscription } from 'rxjs';
import { ITableColumn } from '../../interfaces/IGenericTableAndForm';
import { IData } from '../../interfaces/union';

@Component({
  selector: 'app-sub-loan-types',
  standalone: true,
  imports: [GenericTableComponent],
  templateUrl: './sub-loan-types.component.html',
  styleUrl: './sub-loan-types.component.scss',
})
export class SubLoanTypesComponent implements OnInit, OnDestroy {
  data: IData = {
    data: [],
    items: 0,
    first: 0,
    last: 0,
    pages: 0,
    next: null,
    prev: null,
  };
  tableColumns: ITableColumn[] = Object.values(subLoanTypesColumns).map(
    (value) => value.tableColumn
  );
  dataSubscription: Subscription = new Subscription();

  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataSubscription = this.dataService
      .fetchSubLoanTypes()
      .subscribe((data: IData) => {
        this.data = data;
      });
  }

  updatePage(page: number) {
    this.dataService.page = page;
    this.dataSubscription = this.dataService
      .fetchSubLoanTypes()
      .subscribe((data: IData) => {
        this.data = data;
      });
  }

  updatePerPage(perPage: number) {
    this.dataService.perPage = perPage;
    this.dataSubscription = this.dataService
      .fetchSubLoanTypes()
      .subscribe((data: IData) => {
        this.data = data;
      });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}
