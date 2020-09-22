import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Telefone } from '../model/telefone.model';
import { ResponseTelefone } from '../model/response-telefone.model';
import { Parametro } from '../provider/parametro';

@Injectable()
export class TelefoneService {

  baseUrl = this.constantes.baseUrl + 'personphone';

  constructor(
    private http: HttpClient,
    private constantes: Parametro
  ) { }

  getTodosTelefones() {
    return this.http.get<ResponseTelefone>(this.baseUrl);
  }

  getTelefonePorPessoa(telefone: Telefone) {
    return this.http.get<string>(
      this.baseUrl + '/' + telefone.businessEntityID + '/' + telefone.phoneNumber + '/' + telefone.phoneNumberTypeID,
      {responseType: 'text'}
    );
  }

  createTelefone(telefone: Telefone) {
    return this.http.put<string>(
      this.baseUrl + '/' + telefone.businessEntityID + '/' + telefone.phoneNumber + '/' + telefone.phoneNumberTypeID, null,
      {responseType: 'text'}
    );
  }

  updateTelefone(telefoneAntigo: Telefone, telefoneNovo: Telefone) {

    const postParametros = {
      BusinessEntityID: telefoneNovo.businessEntityID,
      PhoneNumberTypeID: telefoneNovo.phoneNumberTypeID,
      PhoneNumber: telefoneNovo.phoneNumber,
      Person: null,
      PhoneNumberType: null
    };

    return this.http.post<string>(
      this.baseUrl + '/' + telefoneAntigo.businessEntityID + '/' + telefoneAntigo.phoneNumber + '/' + telefoneAntigo.phoneNumberTypeID,
      postParametros,
      {responseType: 'text'}
    );
  }

  deleteTelefone(telefone: Telefone) {
    return this.http.delete(
      this.baseUrl + '/' + telefone.businessEntityID + '/' + telefone.phoneNumber + '/' + telefone.phoneNumberTypeID,
      {responseType: 'text'}
    );
  }
}
