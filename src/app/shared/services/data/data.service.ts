import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { baseUrl, serverPaths } from '../../../constants/api';
import { HttpClient } from '@angular/common/http';
import { IData } from '../../../interfaces/union';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  page: number = 1;
  perPage: number = 5;
  constructor(private http: HttpClient) {}

  private get<T>(endpoint: string): Observable<T> {
    return this.http
      .get<T>(
        `${baseUrl}/${endpoint}?_page=${this.page}&_per_page=${this.perPage}`
      )
      .pipe(
        catchError<any, Observable<T>>((error) => {
          console.error(error);
          return new Observable<never>();
        })
      );
  }

  fetchLoanTypes(): Observable<IData> {
    return this.get<IData>(serverPaths.loantTypes);
  }

  fetchSubLoanTypes(): Observable<IData> {
    return this.get<IData>(serverPaths.subLoanTypes);
  }

  fetchLoanRequests(): Observable<IData> {
    return this.get<IData>(serverPaths.loanRequests);
  }
}
