import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data/data.service';
import { ISubLoanType } from '../../interfaces/ISubLoanType';
import { GenericTableComponent } from '../../shared/components/generic-table/generic-table.component';
import { subLoanTypesColumns } from '../../constants/table-columns/subLoanTypesColumns';
import { Subscription } from 'rxjs';
import { FieldsData } from '../../interfaces/IGenericTableAndForm';
import { IData, IDataUnion } from '../../interfaces/union';

@Component({
  selector: 'app-sub-loan-types',
  standalone: true,
  imports: [GenericTableComponent],
  templateUrl: './sub-loan-types.component.html',
  styleUrl: './sub-loan-types.component.scss',
})
export class SubLoanTypesComponent implements OnInit, OnDestroy {
  metaData: FieldsData<ISubLoanType> = subLoanTypesColumns;
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
      .fetchSubLoanTypes()
      .subscribe((data: IData) => {
        this.data = data;
      });
  }

  getPaginatedData() {
    this.dataSubscription = this.dataService
      .fetchSubLoanTypes()
      .subscribe((data: IData) => {
        this.data = data;
      });
  }

  addItem(data: IDataUnion) {
    this.dataService.addSubLoanType(data as ISubLoanType).subscribe(() => {
      this.getPaginatedData();
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}
