import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data/data.service';
import { ILoanType } from '../../interfaces/loanType';
import { GenericTableComponent } from '../../shared/components/generic-table/generic-table.component';
import { TableColumn } from '../../interfaces/tableColumn';
import { loanTypesColumns } from '../../constants/table-columns/loanTypesColumns';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loan-types',
  standalone: true,
  templateUrl: './loan-types.component.html',
  styleUrl: './loan-types.component.scss',
  imports: [GenericTableComponent],
})
export class LoanTypesComponent implements OnInit, OnDestroy {
  tableData: ILoanType[] = [];
  tableColumns: TableColumn[] = loanTypesColumns;
  dataSubscription: Subscription = new Subscription();

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataSubscription = this.dataService
      .fetchLoanTypes()
      .subscribe((loanTypes: ILoanType[]) => {
        this.tableData = loanTypes;
      });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}
