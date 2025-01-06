import { Component, inject, computed, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PokemonBorderDirective } from '../../../directives/pokemon-border.directive';
import { Pokemon } from '../../../models/pokemon.model';
import { PokemonService } from '../pokemon-services/pokemon.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  imports: [DatePipe, PokemonBorderDirective, RouterLink],
  templateUrl: './pokemon-list.component.html',
  styles: ``
})
export class PokemonListComponent {

  private readonly pokemonService = inject(PokemonService);

  pokemonList = signal(this.pokemonService.getPokemons());

  searchTerm = signal('');

  pokemonFilteredList = computed (() => {
    return this.pokemonList().filter(
      pokemon => 
        pokemon.name.toLowerCase().includes(this.searchTerm().toLowerCase().trim())
    )
  })

  size(pokemon: Pokemon){
    if (pokemon.life <= 15) {
      return 'Petit';
    }
    else if (pokemon.life < 25) {
      return 'Moyen';
    }
    else {
      return 'Grand';
    }
  }
}
