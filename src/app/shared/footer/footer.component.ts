import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // Creando nueva propiedad para el año
  anio: number = new Date ().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
