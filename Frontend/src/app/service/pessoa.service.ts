import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponsePessoa } from '../model/response-pessoa.model';
import { Parametro } from '../provider/parametro';

@Injectable()
export class PessoaService {

  baseUrl = this.constantes.baseUrl + 'person';

  constructor(
    private http: HttpClient,
    private constantes: Parametro
  ) { }

  getTodasPessoas() {
    return this.http.get<ResponsePessoa>(this.baseUrl);
  }
}
