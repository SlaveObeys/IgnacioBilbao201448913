import { Component, OnInit } from '@angular/core';
import { FakestoreapiService } from '../services/fakestoreapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  items: any = []; // Creamos un objeto items para almacenar los datos vacios como array

  constructor(
    private fakestoreapiService: FakestoreapiService // Creamos un objeto del servicio para utilizarlo
  ) { }

  ngOnInit() {

    const productos = localStorage.getItem('productos'); // Obtenemos los productos del localstorage

    // Si existen productos ya guardados, los cargamos desde el json
    if (productos) {
      this.items = JSON.parse(productos);
    } 
    // Si no existen, hacemos el uso de la API para cargarlos
    else {
      // Llamamos al método del servicio que deseamos obtener los datos
      this.fakestoreapiService.obtenerProductos().subscribe((productos => {
        console.log("Obtención de productos");
        this.items = productos;
        localStorage.setItem('productos', JSON.stringify(this.items)); // Almacenamos localmente los productos en el dispositivo
      }));
    }
  }

}