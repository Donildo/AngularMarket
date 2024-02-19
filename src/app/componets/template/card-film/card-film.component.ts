import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/views/list-filmes/film.model';
import { CheckoutService } from '../../../views/checkout/checkout.service';

@Component({
  selector: 'app-card-film',
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.css']
})
export class CardFilmComponent implements OnInit {
  listFilms: Film[] = [];
  constructor(private CheckoutService: CheckoutService) { }

  ngOnInit(): void {
    this.CheckoutService.getListFilms().subscribe((film)=>{
      this.listFilms = film;
    })
  }
  selectFilm(film: Film):void{
    this.CheckoutService.setFilm(film);
    this.CheckoutService.setPrice(film.price);
  }
}
