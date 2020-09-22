
import { PessoaVetor } from './pessoa-vetor.model';

export class ResponsePessoa {

  public success : boolean;
  public data : PessoaVetor;

  constructor (success, data) {

    this.success = success;
    this.data = data;
  }
}
