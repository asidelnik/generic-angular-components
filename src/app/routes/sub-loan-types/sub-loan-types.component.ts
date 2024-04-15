import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data/data.service';
import { ISubLoanType } from '../../interfaces/subLoanType';
import { GenericTableComponent } from '../../shared/components/generic-table/generic-table.component';
import { TableColumn } from '../../interfaces/tableColumn';
import { subLoanTypesColumns } from '../../constants/table-columns/subLoanTypesColumns';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sub-loan-types',
  standalone: true,
  imports: [GenericTableComponent],
  templateUrl: './sub-loan-types.component.html',
  styleUrl: './sub-loan-types.component.scss',
})
export class SubLoanTypesComponent implements OnInit, OnDestroy {
  tableData: ISubLoanType[] = [];
  tableColumns: TableColumn[] = subLoanTypesColumns;
  dataSubscription: Subscription = new Subscription();

  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataSubscription = this.dataService
      .fetchSubLoanTypes()
      .subscribe((subLoanTypes: ISubLoanType[]) => {
        this.tableData = subLoanTypes;
      });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}
