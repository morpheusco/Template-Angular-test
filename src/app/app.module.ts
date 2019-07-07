// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { AppRoutingModule } from './app-routing.module';


// Componentes
// Header y app
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';

// Contenido
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { ItemComponent } from './pages/item/item.component';

// Footer
import { FooterComponent } from './shared/footer/footer.component';

// Servicios
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AcercaComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
