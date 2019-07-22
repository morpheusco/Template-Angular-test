import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../interfaces/idx_productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  urlProductos = 'https://angular-html-plantilla.firebaseio.com/productos_idx.json';

  productos: Productos[] = [];
  productosFiltrado: Productos[] = [];


  constructor(private http: HttpClient) {

    this.cargarProductos();

  }

  private cargarProductos() {

    return new Promise((resolve, reject) => {

      this.http.get(this.urlProductos)
        .subscribe((resp: Productos[]) => {

          this.productos = resp;
          this.cargando = false;
          resolve();

          // Espero un par de segundos antes de mostrar los productos desde Firebase
          /*         setTimeout (() => {
                    this.cargando = false;
                  }, 2000
                  ); */

        });

    });


  }

  getProducto(id: string) {

    return this.http.get(`https://angular-html-plantilla.firebaseio.com/productos/${id}.json`);

  }

  buscarProducto(termino: string) {

    if (this.productos.length === 0) {
      // cargar productos
      this.cargarProductos().then(() => {
        // Ejecutar después de tener los productos.
        // aplicar el filtro

        this.filtrarProductos(termino);

      })

    } else {

      // aplicar el filtro
      this.filtrarProductos(termino);

    }

  }

  private filtrarProductos(termino: string) {

    this.productosFiltrado = [];
    termino = termino.toLowerCase();

    this.productos.forEach(prod => {

      const tituloLower = prod.titulo.toLowerCase();

      if (
        prod.categoria.indexOf(termino) >= 0 ||
        tituloLower.indexOf(termino) >= 0) {
        this.productosFiltrado.push(prod);
      }

    });

  }

}

