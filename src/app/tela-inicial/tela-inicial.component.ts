import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroTemperatura } from '../interface/registro-interface';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit{

  public cidade: any;
  public temperatura: any;
  public descricao: any;
  public data: any;

  public registros: RegistroTemperatura[] = [
    { data: "01/Jan", temperatura: "25°C", img:"nuvem-sol.png" },
    { data: "02/Jan", temperatura: "26°C", img:"sol.png" },
    { data: "03/Jan", temperatura: "27°C", img:"nuvem.png" },
    { data: "04/Jan", temperatura: "28°C", img:"nuvem-sol.png" },
    { data: "05/Jan", temperatura: "29°C", img:"sol.png" },
    { data: "06/Jan", temperatura: "30°C", img:"sol.png" },
    { data: "07/Jan", temperatura: "31°C", img:"sol.png" },
    { data: "08/Jan", temperatura: "32°C", img:"sol.png" },
    { data: "09/Jan", temperatura: "33°C", img:"sol.png" },
    { data: "10/Jan", temperatura: "34°C", img:"sol.png" },
  ];

  constructor(
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.obterPrevisaoTempo();
  }
  

  obterPrevisaoTempo() {
    this.cidade = 'Florianópolis';
    this.temperatura = 25;
    this.descricao = 'Ensolarado';
    this.data = 'Quinta-feira, 22 Junho'
  }
  
  public navigateToPrevisaoSemana() {
    this.router.navigate(['/previsao'])
  }

}
