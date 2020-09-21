import { RouterModule, Routes } from '@angular/router';
import {AdicionaTelefoneComponent} from './adiciona-telefone/adiciona-telefone.component';
import {EditaTelefoneComponent} from './edita-telefone/edita-telefone.component';
import {ListaTelefoneComponent} from './lista-telefone/lista-telefone.component';

const routes : Routes = [
  { path : 'lista-telefone', component : ListaTelefoneComponent },
  { path : 'adiciona-telefone', component : AdicionaTelefoneComponent },
  { path : 'edita-telefone', component : EditaTelefoneComponent }
];

export const routing = RouterModule.forRoot(routes);
