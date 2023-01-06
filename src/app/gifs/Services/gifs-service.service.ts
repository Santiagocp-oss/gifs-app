import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Datum } from '../interfaces/Gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {

  private apikey: string = 'HOZDf1vbv4bjfxFcQe5wdMlxdZ7JYPE2';
  private serviciosUrl: string = 'https://api.giphy.com/v1/gifs'
  private _historial:string[] = [];

  public resultados: Datum[] = [];

  get historial(){ 
    return[...this._historial]
  }

  constructor (private http : HttpClient) {

    // localStorage.getItem('historial')
    if (localStorage.getItem('historial')){
      this._historial = JSON.parse( localStorage.getItem('historial')!)  ;

      if (localStorage.getItem('resultados')){
        this.resultados = JSON.parse(localStorage.getItem('resultados')!);                                                                                                              
      }
    }
  }
  
  buscarGifs( query: string ='') {

    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes(query)){
      this._historial.unshift( query);
      this._historial= this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial));

    }

    const params = new HttpParams()
      .set('api_key', this.apikey)
      .set('limit', '10')
      .set('q', query);

      console.log(params.toString)

    this.http.get<SearchGifsResponse>(`${ this.serviciosUrl}/search`, { params })   
    .subscribe((resp) => {
      console.log(resp.data);
      this.resultados = resp.data;

      localStorage.setItem('resultados', JSON.stringify(this.resultados));
    })
  }

  

}
