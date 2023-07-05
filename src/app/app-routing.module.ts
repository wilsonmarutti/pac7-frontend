import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { PrevisaoSemanaComponent } from './previsao-semana/previsao-semana.component';

const routes: Routes = [
  {path:'', redirectTo:"/home", pathMatch:'full'},
  {path:'home', component: TelaInicialComponent,},
  {path:'previsao', component:PrevisaoSemanaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
