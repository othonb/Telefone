import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdicionaTelefoneComponent } from './adiciona-telefone/adiciona-telefone.component';
import { EditaTelefoneComponent } from './edita-telefone/edita-telefone.component';
import { ListaTelefoneComponent } from './lista-telefone/lista-telefone.component';
import { routing } from './app.routing';
import { TelefoneService } from './service/telefone.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

@NgModule({
  declarations: [
    ListaTelefoneComponent,
    AdicionaTelefoneComponent,
    EditaTelefoneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [TelefoneService, HttpClient],
  bootstrap: [ListaTelefoneComponent]
})
export class AppModule { }
