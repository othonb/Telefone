import { Pessoa } from './pessoa.model';
import { TipoTelefone } from './tipo-telefone.model';

export class Telefone {
  public idPessoa : number;
  public idTipoTelefone : number;
  public numTelefone : string;
  public pessoa : Pessoa;
  public tipoTelefone : TipoTelefone;

  constructor (idPessoa, idTipoTelefone, numTelefone, pessoa, tipoTelefone) {

    this.idPessoa = idPessoa;
    this.idTipoTelefone = idTipoTelefone;
    this.numTelefone = numTelefone;
    this.pessoa = pessoa;
    this.tipoTelefone = tipoTelefone;
  }
}
