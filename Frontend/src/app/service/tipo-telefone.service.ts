import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseTipoTelefone } from '../model/response-tipo-telefone.model';
import { Parametro } from '../provider/parametro';

@Injectable()
export class TipoTelefoneService {

  baseUrl = this.constantes.baseUrl + 'phonenumbertype';

  constructor(
    private http: HttpClient,
    private constantes: Parametro
  ) { }

  getTodosTelefones() {
    return this.http.get<ResponseTipoTelefone>(this.baseUrl);
  }


}
