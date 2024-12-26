import { Component, signal, computed, effect } from '@angular/core';
import { POKEMON_LIST } from './pokemon-list.fake';
import { Pokemon } from './pokemon.model';
import { PokemonBorderDirective } from './pokemon-border.directive';
import { DatePipe } from '@angular/common';
import { ReversePipe } from './reverse.pipe';

@Component({
  selector: 'app-root',
  imports: [PokemonBorderDirective, DatePipe, ReversePipe],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pokemonList = signal(POKEMON_LIST);

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

  /*name = signal('Pikachu');
  life = signal(23);
  imageUrl = signal('images/pikachu-png-transparent-0.png');
  imageShown = signal(true);
  
  imageTextButton = computed(() => {
    return this.imageShown()? 'Masquer l\'image' : 'Afficher l\'image';
  })
  
  size = computed(() => {
    if (this.life() <= 15) {
      return 'Petit';
    }
    else if (this.life() < 25) {
      return 'Moyen';
    }
    else {
      return 'Grand';
    }
  })


  constructor(){
    effect(() => {
      console.log('Le compteur a été mis à jour :', this.life());
    });

  }

  

  changeImage(){
    this.imageShown.update(value => !value);
  }
  
  */
