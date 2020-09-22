import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TelefoneService } from '../service/telefone.service';
import { Telefone } from '../model/telefone.model';
import { isNullOrUndefined } from 'util';
import { Parametro } from '../provider/parametro';

@Component({
  selector: 'app-lista-telefone',
  templateUrl: './lista-telefone.component.html',
  styleUrls: ['./lista-telefone.component.css']
})
export class ListaTelefoneComponent implements OnInit {

  telefones: Telefone[] = [];

  constructor(
    private router: Router,
    private telefoneService: TelefoneService,
    private parametro : Parametro) { }

  ngOnInit() {

    this.recuperaTodosTelefones()

  }

  recuperaTodosTelefones() {

    this.telefoneService.getTodosTelefones()
      .subscribe(resposta =>
      {

        if (resposta.success &&
          ! isNullOrUndefined(resposta.data) &&
          ! isNullOrUndefined(resposta.data.personPhoneObjects)) {

            this.telefones = [];

            this.telefones = resposta.data.personPhoneObjects;

          }

      });

  }

  apagaTelefone(telefone : Telefone): void {

    if (confirm ('Remove o registro?')) {

      this.telefoneService.deleteTelefone(telefone)
      .subscribe( resposta => {

        window.alert(resposta);

        this.recuperaTodosTelefones();

      });

    }
  }

  editaTelefone(telefone : Telefone): void {

    this.parametro.dados = telefone;

    this.router.navigate(['edita-telefone']);

  };

  adicionaTelefone(): void {

    this.router.navigate(['adiciona-telefone']);

  };

}
