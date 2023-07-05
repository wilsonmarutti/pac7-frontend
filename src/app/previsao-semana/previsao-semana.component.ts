import { Component } from '@angular/core';
import { RegistroCompletoInterface } from '../interface/registro-completo-interface';

@Component({
  selector: 'app-previsao-semana',
  templateUrl: './previsao-semana.component.html',
  styleUrls: ['./previsao-semana.component.css']
})
export class PrevisaoSemanaComponent {

  public registroCompletoInterface: RegistroCompletoInterface[] =[
    { msg: 'string',
      data: 'das',
      ImgFim: 'ng',
      tempMax: 'string',
      TempMin: 'string',
      arrowUp: 'string',
      arrowDown: 'ing',
      imgInicial: 'string',
    }
  ]

}
