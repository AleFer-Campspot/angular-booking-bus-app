import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class Master {

  constructor(private http: HttpClient) {}

  getLocations(): Observable<any[]> {
    return this.http.get<any[]>(`api/GetBusLocations`);
  }

  searchBuses(from: number, to: number, date: string): Observable<any[]> {
    return this.http.get<any[]>(`api/searchBus?fromLocation=${from}&toLocation=${to}&travelDate=${date}`);
  }
}
