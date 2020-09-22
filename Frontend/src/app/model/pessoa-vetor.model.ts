import { Pessoa } from './pessoa.model';

export class PessoaVetor {
  public personObjects : Pessoa [];

  constructor (personObjects) {

    this.personObjects = personObjects;

  }
}
