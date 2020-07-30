import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: '',
    loadChildren: './pages/pages.module#PagesModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
