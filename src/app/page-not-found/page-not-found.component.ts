import { Component, signal } from '@angular/core';
import { POKEMON_LIST } from '../../fake-database/pokemon-list.fake';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  imports: [RouterLink],
  templateUrl: './page-not-found.component.html',
  styles: ``
})
export class PageNotFoundComponent {
  random = Math.floor(Math.random() * POKEMON_LIST.length);
  unPokemon = signal(POKEMON_LIST[this.random])
}
