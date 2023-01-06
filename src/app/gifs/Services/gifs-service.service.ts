import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {

  private apikey: string = 'HOZDf1vbv4bjfxFcQe5wdMlxdZ7JYPE2';
  private _historial:string[] = [];

  public resultados: any[] = [];

  get historial(){ 
    return[...this._historial]
  }

  constructor (private http : HttpClient) {}
  
  buscarGifs( query: string ='') {

    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes(query)){
      this._historial.unshift( query);
      this._historial= this._historial.splice(0,10);
    }

    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=' + this.apikey + '&q='+ query +'&limit=10')   
    .subscribe((resp: any) => {
      console.log(resp.data);
      this.resultados = resp.data;
    })
  }

  

}
