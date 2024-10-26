import { Component, OnInit } from '@angular/core';
import { SocialpostAPIService } from '../services/socialpost-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  posts: any = [];

  constructor(
    private socialPostApi: SocialpostAPIService
  ) { }

  ngOnInit() {

    const postsStorage = localStorage.getItem('posts'); // Obtenemos los posts del localstorage

    // Si existen los posts ya guardados, los cargamos desde el json
    if (postsStorage) {
      this.posts = JSON.parse(postsStorage);
    }
    // Si no existen, los cargamos desde la API
    else {
      //Obtenemos los datos de la API de POSTS
      this.socialPostApi.obtenerPosts().subscribe((post => {
        // Si se encuentran posts en la API
        if (Object.keys(post).length > 1) {
          this.posts = post;
          localStorage.setItem('posts', JSON.stringify(this.posts)); // Almacenamos localmente los posts en el dispositivo
        }
      }));
    }

  }

}
