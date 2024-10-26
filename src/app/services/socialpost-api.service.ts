import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Posts {
  userId: number
  id: number
  title: string
  body: string
}


@Injectable({
  providedIn: 'root'
})
export class SocialpostAPIService {

  private urlSocialPosts = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(
    private http: HttpClient
  ) { }

  obtenerPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.urlSocialPosts);
  }


}
