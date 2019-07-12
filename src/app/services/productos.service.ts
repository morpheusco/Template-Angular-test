import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../interfaces/idx_productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  urlProductos = 'https://angular-html-plantilla.firebaseio.com/productos_idx.json';
  productos: Productos [] = [];

  constructor( private http: HttpClient ) {

    this.cargarProductos ();

  }

  private cargarProductos()  {

    this.http.get(this.urlProductos)
      .subscribe( (resp: Productos[]) => {

        console.log (resp);
        this.productos = resp;

        // Espero un par de segundos antes de mostrar los productos desde Firebase
        setTimeout (() => {
          this.cargando = false;
        }, 2000
        );

      } ) ;









  }





}
