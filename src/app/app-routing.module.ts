import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageExercicioNovoComponent } from './pages/page-exercicio-novo/page-exercicio-novo.component';
import { PageExerciciosComponent } from './pages/page-exercicios/page-exercicios.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageTreinosComponent } from './pages/page-treinos/page-treinos.component';

const routes: Routes = [
  {
    path: 'exercicio-novo',
    component: PageExercicioNovoComponent,
  },
  {
    path: 'exercicios',
    component: PageExerciciosComponent,
  },
  {
    path: 'treinos',
    component: PageTreinosComponent,
  },
  {
    path: 'home',
    component: PageHomeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
