import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from './mission.models';


@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class SpaceXService {
  apiUrl = 'https://api.spacexdata.com/v3';
  
  constructor(private http: HttpClient) { }
  
  // methods to fetch data from the API
  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.apiUrl}/launches`);
  }
  
  getMission(flightNumber: string): Observable<Mission> {
    return this.http.get<Mission>(`${this.apiUrl}/launches/${flightNumber}`);
  }
}
