import { CriarUsuarioComponent } from './components/usuario/criar-usuario/criar-usuario.component';
import { CadastroUsuarioComponent } from './views/cadastro-usuario/cadastro-usuario.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',
  component: HomeComponent
},
{
  path:'cadastro',
  component: CadastroUsuarioComponent
},
{
  path:'cadastro/criar-usuario',
  component: CriarUsuarioComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
