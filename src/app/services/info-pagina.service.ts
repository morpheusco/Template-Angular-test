import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  // Cargando el equipo desde Json Firebase
  equipo: any [] = [];

  constructor( private http: HttpClient  ) {

    // Llamamos a los dos métodos, el que carga el json local y el json externo de Firebase
    this.cargarInfo();
    this.cargarEquipo ();

   }

   private cargarInfo () {
    // Leer el Json
    this.http.get ('assets/data/data-pagina.json')
    .subscribe ( (resp: InfoPagina) =>  {

      this.cargada = true;
      this.info = resp;

    });

   }

   private cargarEquipo () {
    // Leer el Json
    this.http.get ('https://angular-html-plantilla.firebaseio.com/equipo.json')
    .subscribe ( (resp: any[]) => {

      this.equipo = resp;


    });

   }


}
