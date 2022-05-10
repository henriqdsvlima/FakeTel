import { PerfilUsuarioComponent } from './views/perfil-usuario/perfil-usuario.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',
  component: HomeComponent
},
{
  path:'perfil',
  component: PerfilUsuarioComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
