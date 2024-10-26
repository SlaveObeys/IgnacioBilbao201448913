import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Productos {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

interface Rating {
  rate: number
  count: number
}


@Injectable({
  providedIn: 'root'
})
export class FakestoreapiService {

  private url = 'https://fakestoreapi.com/products';

  constructor(
    private http: HttpClient
  ) { }

  obtenerProductos(): Observable<Productos[]> {
    return this.http.get<Productos[]>(this.url);
  }
}
