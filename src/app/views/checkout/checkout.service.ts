import { Injectable } from '@angular/core';
import { Film } from '../list-filmes/film.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  public baseUrl: string = 'http://localhost:3001';
  public listFilms: Film[] = [];
  public totalPrice: number = 0;
  public listSelectedFilmes: Film[] = [];

  private_priceHandler: number = 0;

  getPrice(): number {
    return this.private_priceHandler;
  }

  setPrice(value: number) {
    this.private_priceHandler = value;
  }

  private _filmHandler!: Film;

  getFilm() : Film {
    return this._filmHandler;
  }

  setFilm(value: Film){
    this._filmHandler = value;
  }

  constructor(private httpClient: HttpClient) {
  }
  getListFilms(): Observable<Film[]>{
    return this.httpClient.get<Film[]>(this.baseUrl+'/films')
  }

  selectFilm() {
    setTimeout(()=>{
      this.totalPrice += this.getPrice();
      console.log(this.totalPrice);
      this.listSelectedFilmes.push(this.getFilm())
    }, 1);
  }
  unselectFilm(){
    this.totalPrice -=this.getPrice();
    if(this.totalPrice <0){
      this.totalPrice = 0;
    }

    let index = this.listSelectedFilmes.indexOf(this.getFilm());
    if(index > -1 || index === this.listSelectedFilmes.indexOf(this.getFilm())) {
      this.listSelectedFilmes.splice(index, 1)
    }
  }
}
