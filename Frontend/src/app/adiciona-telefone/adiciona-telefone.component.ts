import { Component, OnInit } from '@angular/core';
import { Telefone } from '../model/telefone.model';
import { Pessoa } from '../model/pessoa.model';
import { PessoaService } from '../service/pessoa.service';
import { TipoTelefoneService } from '../service/tipo-telefone.service';
import { TipoTelefone } from '../model/tipo-telefone.model';
import { TelefoneService } from '../service/telefone.service';

@Component({
  selector: 'app-adiciona-telefone',
  templateUrl: './adiciona-telefone.component.html',
  styleUrls: ['./adiciona-telefone.component.css']
})
export class AdicionaTelefoneComponent implements OnInit {

  telefone : Telefone;
  pessoas : Pessoa[] = [];
  tiposTelefones : TipoTelefone[] = [];

  constructor(
    private pessoaService : PessoaService,
    private tipoTelefoneService: TipoTelefoneService,
    private telefoneService : TelefoneService
  ) { }

  ngOnInit() {

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

      this.telefoneService.createTelefone(telefoneNovo)
        .subscribe(resposta =>{

          window.alert(resposta);

          window.history.back();
        },
        erro => {

          if (erro.status === 404) {

            window.alert('Ocorreu um erro na inserção dos dados!');

          }

          window.history.back();
        }
      );

    }

  }

}
