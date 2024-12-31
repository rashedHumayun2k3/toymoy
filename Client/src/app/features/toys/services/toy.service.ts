import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Toy } from '../models/toy.model';

@Injectable({
  providedIn: 'root'
})
export class ToyService {
  
  // The URL to your API. Replace with your actual backend URL.
  private apiUrl = 'https://api.example.com/toys'; // Example API URL

  constructor() {}

  // Fetch all toys
  // getToys(): Observable<Toy[]> {
  //   return this.http.get<Toy[]>(this.apiUrl);
  // }

  // // Fetch a single toy by its ID
  // getToyById(id: string): Observable<Toy> {
  //   return this.http.get<Toy>(`${this.apiUrl}/${id}`);
  // }
}
