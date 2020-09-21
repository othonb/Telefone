import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Telefone} from '../model/telefone.model';
import { Response } from '../model/response.model';

@Injectable()
export class TelefoneService {

  baseUrl = 'http://localhost:8080/api/personphone';

  constructor(private http: HttpClient) { }

  getTodosTelefones() {
    return this.http.get<Response>(this.baseUrl);
  }

  getTelefonePorPessoa(telefone: Telefone) {
    return this.http.get<string>(this.baseUrl + '/' + telefone.businessEntityID + '/' + telefone.phoneNumber + '/' + telefone.phoneNumberTypeID);
  }

  createTelefone(telefone: Telefone) {
    return this.http.put<string>(this.baseUrl + '/' + telefone.businessEntityID + '/' + telefone.phoneNumber + '/' + telefone.phoneNumberTypeID, null);
  }

  updateTelefone(telefone: Telefone) {
    return this.http.post<string>(this.baseUrl + '/' + telefone.businessEntityID + '/' + telefone.phoneNumber + '/' + telefone.phoneNumberTypeID, null);
  }

  deleteTelefone(telefone: Telefone) {
    return this.http.delete(this.baseUrl + '/' + telefone.businessEntityID + '/' + telefone.phoneNumber + '/' + telefone.phoneNumberTypeID, {responseType: 'text'});
  }
}
