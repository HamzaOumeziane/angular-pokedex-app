import { Component, inject, signal } from '@angular/core';
import { POKEMON_LIST } from '../../fake-database/pokemon-list.fake';
import { RouterLink } from '@angular/router';
import { PokemonService } from '../pokemon/pokemon-services/pokemon.service';

@Component({
  selector: 'app-page-not-found',
  imports: [RouterLink],
  templateUrl: './page-not-found.component.html',
  styles: ``
})
export class PageNotFoundComponent {
  random = Math.floor(Math.random() * POKEMON_LIST.length);
  pokemonService = inject(PokemonService)
  unPokemon = signal(this.pokemonService.getPokemon(this.random));
}
