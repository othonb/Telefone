export class TipoTelefone {
  public phoneNumberTypeID : number;
  public name : string;

  constructor (phoneNumberTypeID, name) {
    this.phoneNumberTypeID = phoneNumberTypeID;
    this.name = name;
  }
}
