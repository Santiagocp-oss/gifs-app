import { Component } from '@angular/core';
import { GifsServiceService } from '../Services/gifs-service.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent {

  
  get resultados () {
    return this.GifsServiceService.resultados;
  }
      

  constructor(private GifsServiceService : GifsServiceService){
    
  }
}
