
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class KansasService {
  private apiUrl = 'https://api.weather.gov/gridpoints/TOP/31,80/forecast'

  constructor(
    private http: HttpClient,
  ) {

  }

  getTemperatures(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => {
        // Suponemos que la respuesta tiene una propiedad 'periods' que es un array de objetos
        return response.properties
      })
    );
}

  

  

}