import { Pessoa } from './pessoa.model';
import { TipoTelefone } from './tipo-telefone.model';

export class Telefone {
  public businessEntityID : number;
  public phoneNumberTypeID : number;
  public phoneNumber : string;
  public person : Pessoa;
  public phoneNumberType : TipoTelefone;

  constructor (businessEntityID, phoneNumberTypeID, phoneNumber, person, phoneNumberType) {

    this.businessEntityID = businessEntityID;
    this.phoneNumberTypeID = phoneNumberTypeID;
    this.phoneNumber = phoneNumber;
    this.person = person;
    this.phoneNumberType = phoneNumberType;
  }
}
