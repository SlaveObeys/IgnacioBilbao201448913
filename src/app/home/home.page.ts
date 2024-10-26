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

    //Obtenemos los datos de la API de POSTS
    this.socialPostApi.obtenerPosts().subscribe((post => {
      console.log("API: ", post);
      // Si se encuentran posts en la API
      if (Object.keys(post).length > 1) {
        this.posts = post;
      }
      // Si está vacía la petición mostrar un mensaje de error
      else {
        console.log("No se han encontrado posts");

      }
    }));

  }

}
