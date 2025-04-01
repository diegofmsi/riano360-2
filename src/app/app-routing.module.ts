import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DocumentalComponent } from './pages/documental/documental.component';
import { RecorridoComponent } from './pages/recorrido/recorrido.component';
import { PueblosEntornoComponent } from './pages/pueblos-entorno/pueblos-entorno.component';
import { PlanificadorComponent } from './pages/planificador/planificador.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'documental', component: DocumentalComponent },
  { path: 'recorrido', component: RecorridoComponent },
  { path: 'pueblos-entorno', component: PueblosEntornoComponent },
  { path: 'planificador', component: PlanificadorComponent },
  // Ruta comodín en caso de que no se encuentre la página
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
