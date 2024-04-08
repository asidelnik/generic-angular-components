import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ILoanType } from '../../../interfaces/loanType';
import { ISubLoanType } from '../../../interfaces/subLoanType';
import { ILoanRequest } from '../../../interfaces/loanRequest';
import { baseUrl, serverPaths } from '../../../constants/api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  private get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${baseUrl}/${endpoint}`).pipe(
      catchError<any, Observable<T>>((error) => {
        console.error(error);
        return new Observable<never>();
      })
    );
  }

  fetchLoanTypes(): Observable<ILoanType[]> {
    return this.get<ILoanType[]>(serverPaths.loantTypes);
  }

  fetchSubLoanTypes(): Observable<ISubLoanType[]> {
    return this.get<ISubLoanType[]>(serverPaths.subLoanTypes);
  }

  fetchLoanRequests(): Observable<ILoanRequest[]> {
    return this.get<ILoanRequest[]>(serverPaths.loanRequests);
  }
}
