import { Component } from '@angular/core';
import { GifsServiceService } from '../../gifs/Services/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  get historial(){
    return this.gifsService.historial;
    

  }
  constructor (private gifsService : GifsServiceService){
    
  }
}
