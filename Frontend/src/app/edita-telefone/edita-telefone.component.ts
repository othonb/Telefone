import { Component, OnInit } from '@angular/core';
import { Telefone } from '../model/telefone.model';
import { Pessoa } from '../model/pessoa.model';
import { Parametro } from '../provider/parametro';
import { PessoaService } from '../service/pessoa.service';
import { TipoTelefoneService } from '../service/tipo-telefone.service';
import { TipoTelefone } from '../model/tipo-telefone.model';
import { TelefoneService } from '../service/telefone.service';

@Component({
  selector: 'app-edita-telefone',
  templateUrl: './edita-telefone.component.html',
  styleUrls: ['./edita-telefone.component.css']
})
export class EditaTelefoneComponent implements OnInit {

  telefone : Telefone;
  pessoas : Pessoa[] = [];
  tiposTelefones : TipoTelefone[] = [];

  constructor(
    private parametro : Parametro,
    private pessoaService : PessoaService,
    private tipoTelefoneService: TipoTelefoneService,
    private telefoneService : TelefoneService
  ) { }

  ngOnInit() {

    this.telefone = this.parametro.dados;

    this.pessoaService.getTodasPessoas()
      .subscribe(resposta =>
      {
        this.pessoas = resposta.data.personObjects;

      });

    this.tipoTelefoneService.getTodosTelefones()
      .subscribe(resposta =>
      {
        this.tiposTelefones = resposta.data.phoneNumberTypeObjects;

      });

  }

  salvaAlteracoes() {

    if (confirm('Salva as alterações?')) {

      const telefoneNovo = new Telefone(
        (<HTMLSelectElement>document.getElementById('pessoaSelect')).value,
        (<HTMLSelectElement>document.getElementById('tipoTelefoneSelect')).value,
        (<HTMLInputElement>document.getElementById('phoneNumberInput')).value,
        null,
        null
      );

      this.telefoneService.updateTelefone(this.telefone, telefoneNovo)
        .subscribe(resposta => {

          window.alert(resposta);

          window.history.back();
        },
        erro => {

          if (erro.status === 404) {

            window.alert('Ocorreu um erro na alteração dos dados!');

          }

          window.history.back();

        }
      );

    }

  }

}
