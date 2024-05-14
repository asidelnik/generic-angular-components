import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data/data.service';
import { ILoanType } from '../../interfaces/ILoanType';
import { GenericTableComponent } from '../../shared/components/generic-table/generic-table.component';
import { loanTypesFieldsData } from '../../constants/table-columns/loanTypesColumns';
import { Subscription } from 'rxjs';
import { FieldsData } from '../../interfaces/IGenericTableAndForm';
import { IData } from '../../interfaces/union';

@Component({
  selector: 'app-loan-types',
  standalone: true,
  templateUrl: './loan-types.component.html',
  styleUrl: './loan-types.component.scss',
  imports: [GenericTableComponent],
})
export class LoanTypesComponent implements OnInit, OnDestroy {
  metaData: FieldsData<ILoanType> = loanTypesFieldsData;
  data: IData = {
    data: [],
    items: 0,
    first: 0,
    last: 0,
    pages: 0,
    next: null,
    prev: null,
  };

  dataSubscription: Subscription = new Subscription();

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.page = 1;
    this.dataSubscription = this.dataService
      .fetchLoanTypes()
      .subscribe((data: IData) => {
        this.data = data;
      });
  }

  getPaginatedData() {
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
