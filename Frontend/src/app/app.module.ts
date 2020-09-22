import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdicionaTelefoneComponent } from './adiciona-telefone/adiciona-telefone.component';
import { EditaTelefoneComponent } from './edita-telefone/edita-telefone.component';
import { ListaTelefoneComponent } from './lista-telefone/lista-telefone.component';
import { AppRoutingModule } from './app-routing.module';
import { TelefoneService } from './service/telefone.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Parametro } from './provider/parametro';
import { PessoaService } from './service/pessoa.service';
import { TipoTelefoneService } from './service/tipo-telefone.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaTelefoneComponent,
    AdicionaTelefoneComponent,
    EditaTelefoneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    TelefoneService,
    PessoaService,
    TipoTelefoneService,
    HttpClient,
    Parametro
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
