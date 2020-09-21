import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { TelefoneService } from '../service/telefone.service';
import { Telefone } from '../model/telefone.model';

@Component({
  selector: 'app-lista-telefone',
  templateUrl: './lista-telefone.component.html',
  styleUrls: ['./lista-telefone.component.css']
})
export class ListaTelefoneComponent implements OnInit {

  telefones: Telefone[];

  constructor(private router: Router, private telefoneService: TelefoneService) { }

  ngOnInit() {
    this.telefoneService.getTodosTelefones()
      .subscribe(resposta =>
      {
        console.log(resposta);
      });
  }

  apagaTelefone(telefone : Telefone): void {
    this.telefoneService.deleteTelefone(telefone)
      .subscribe( resposta => {
        console.log(resposta);
      });
  }

  editaTelefone(telefone : Telefone): void {
    // localStorage.removeItem("editUserId");
    // localStorage.setItem("editUserId", user.id.toString());
    // this.router.navigate(['edit-user']);
  };

  adicionaTelefone(): void {
    this.router.navigate(['adiciona-telefone']);
  };

}
