import { Component, signal, computed, effect, inject } from '@angular/core';
import { Pokemon } from './pokemon.model';
import { PokemonBorderDirective } from './pokemon-border.directive';
import { DatePipe } from '@angular/common';
import { ReversePipe } from './reverse.pipe';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  imports: [PokemonBorderDirective, DatePipe],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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

  incrementLife(pokemon: Pokemon){
    pokemon.life += 1;
  }

  decrementLife(pokemon: Pokemon){
    pokemon.life -= 1;
    
  }
}