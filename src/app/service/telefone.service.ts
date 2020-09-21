import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Telefone} from "../model/telefone.model";

@Injectable()
export class TelefoneService {

  baseUrl = 'http://localhost:8080/api/personphone';

  constructor(private http: HttpClient) { }

  getTodosTelefones() {
    return this.http.get<Telefone[]>(this.baseUrl);
  }

  getTelefonePorPessoa(telefone: Telefone) {
    return this.http.get<string>(this.baseUrl + '/' + telefone.idPessoa + '/' + telefone.numTelefone + '/' + telefone.idTipoTelefone);
  }

  createTelefone(telefone: Telefone) {
    return this.http.put<string>(this.baseUrl + '/' + telefone.idPessoa + '/' + telefone.numTelefone + '/' + telefone.idTipoTelefone, null);
  }

  updateTelefone(telefone: Telefone) {
    return this.http.post<string>(this.baseUrl + '/' + telefone.idPessoa + '/' + telefone.numTelefone + '/' + telefone.idTipoTelefone, null);
  }

  deleteTelefone(telefone: Telefone) {
    return this.http.delete<string>(this.baseUrl + '/' + telefone.idPessoa + '/' + telefone.numTelefone + '/' + telefone.idTipoTelefone, null);
  }
}
