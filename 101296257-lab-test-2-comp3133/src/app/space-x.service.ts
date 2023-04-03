import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from './mission.models';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {
  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.apiUrl);
  }

  getMission(flightNumber: string): Observable<Mission> {
    const url = `${this.apiUrl}/${flightNumber}`;
    return this.http.get<Mission>(url);
  }

  getMissionsByYear(year: number): Observable<Mission[]> {
    const url = `${this.apiUrl}?launch_year=${year}`;
    return this.http.get<Mission[]>(url);
  }
}
