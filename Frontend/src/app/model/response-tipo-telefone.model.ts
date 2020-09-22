
import { TipoTelefoneVetor } from './tipo-telefone-vetor.model';

export class ResponseTipoTelefone {

  public success : boolean;
  public data : TipoTelefoneVetor;

  constructor (success, data) {

    this.success = success;
    this.data = data;
  }
}
