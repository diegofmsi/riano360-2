import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { DocumentalComponent } from './pages/documental/documental.component';
import { RecorridoComponent } from './pages/recorrido/recorrido.component';
import { PueblosEntornoComponent } from './pages/pueblos-entorno/pueblos-entorno.component';
import { PlanificadorComponent } from './pages/planificador/planificador.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

  

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DocumentalComponent,
    RecorridoComponent,
    PueblosEntornoComponent,
    PlanificadorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
