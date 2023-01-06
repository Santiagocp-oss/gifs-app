import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsServiceService } from '../Services/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  @ViewChild( 'txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

constructor(private gifsService : GifsServiceService) {}

  buscar(termino:string){
    
    const valor=this.txtBuscar.nativeElement.value;

    if(valor.trim().length ===0){
      return;
    }

    this.gifsService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = '';
  }
}
