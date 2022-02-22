import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl: string = environment.baseUrl;//url base en un enviroment

  constructor(private http: HttpClient) { } 

  //Obtiene pokemon
  getPokemons(index){ //obteniendo datos api
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }
  
}