import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageExerciciosComponent } from './pages/page-exercicios/page-exercicios.component';
import { PageTreinosComponent } from './pages/page-treinos/page-treinos.component';
import { CompNavbarComponent } from './components/comp-navbar/comp-navbar.component';
import { CompMenuComponent } from './components/comp-menu/comp-menu.component';
import { CompExercicesListComponent } from './components/comp-exercices-list/comp-exercices-list.component';
import { CompContentComponent } from './components/comp-content/comp-content.component';
import { CompPageHeaderComponent } from './components/comp-page-header/comp-page-header.component';
import { HttpClientModule } from '@angular/common/http';
import { PageExercicioNovoComponent } from './pages/page-exercicio-novo/page-exercicio-novo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { OrderModule } from 'ngx-order-pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageExerciciosComponent,
    PageTreinosComponent,
    CompNavbarComponent,
    CompMenuComponent,
    CompExercicesListComponent,
    CompContentComponent,
    CompPageHeaderComponent,
    PageExercicioNovoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    OrderModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      maxOpened: 2,
      autoDismiss: true,
    }),],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
