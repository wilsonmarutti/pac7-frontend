import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css', '../../styles.css']
})
export class TelaInicialComponent implements OnInit{

  public cidade: any;
  public temperatura: any;
  public descricao: any;
  public data: any;

  constructor() {

  }
  ngOnInit(): void {
    this.obterPrevisaoTempo();
  }
  

  obterPrevisaoTempo() {
    this.cidade = 'São Paulo';
    this.temperatura = 25;
    this.descricao = 'Ensolarado';
    this.data = 'Quinta-feira, 22 Junho'
  }
  

}
