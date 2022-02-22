import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { PokeTableComponent } from './components/poke-table/poke-table.component';

//Ruteo
const routes: Routes = [
  {path:'home', component:PokeTableComponent }, 
  {path: 'pokeDetail/:id', component: PokeDetailComponent}, //detalle
  {path:'', pathMatch:'full', redirectTo:'home' }, //home 
  {path:'**',pathMatch:'full', redirectTo:'home'} //cualquier otro caso
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
