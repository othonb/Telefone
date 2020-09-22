
import {AdicionaTelefoneComponent} from './adiciona-telefone/adiciona-telefone.component';
import {EditaTelefoneComponent} from './edita-telefone/edita-telefone.component';
import {ListaTelefoneComponent} from './lista-telefone/lista-telefone.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path : '', component : ListaTelefoneComponent },
  { path : 'app-lista-telefone', component : ListaTelefoneComponent },
  { path : 'lista-telefone', component : ListaTelefoneComponent },
  { path : 'adiciona-telefone', component : AdicionaTelefoneComponent },
  { path : 'edita-telefone', component : EditaTelefoneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
