
import { TelefoneVetor } from './telefone-vetor.model';

export class Response {

  public success : boolean;
  public data : TelefoneVetor;

  constructor (success, data) {

    this.success = success;
    this.data = data;
  }
}
