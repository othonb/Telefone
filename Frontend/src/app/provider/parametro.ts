import { Injectable } from '@angular/core';

@Injectable()
export class Parametro {

  public dados : any;

  public baseUrl = 'http://localhost:8080/api/';

  constructor() {}

}
