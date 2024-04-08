import { Routes } from '@angular/router';
import { LoanTypesComponent } from './routes/loan-types/loan-types.component';
import { SubLoanTypesComponent } from './routes/sub-loan-types/sub-loan-types.component';
import { LoanRequestsComponent } from './routes/loan-requests/loan-requests.component';

export const routes: Routes = [
  { path: '', redirectTo: 'loan-types', pathMatch: 'full' },
  { path: 'loan-types', component: LoanTypesComponent },
  { path: 'sub-loan-types', component: SubLoanTypesComponent },
  { path: 'loan-requests', component: LoanRequestsComponent },
  { path: '**', redirectTo: 'home' },
];
