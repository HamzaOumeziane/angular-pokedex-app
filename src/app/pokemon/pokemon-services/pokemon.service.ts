import { Injectable, input } from '@angular/core';
import { POKEMON_LIST } from '../../../fake-database/pokemon-list.fake';
import { Pokemon } from '../../../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemonList: Pokemon[] = POKEMON_LIST;

  constructor() { }

  getPokemons() {
    return this.pokemonList;
  }

  getPokemon(id: number) {
    const pokemon = this.pokemonList.find(pokemon => pokemon.id === id);
    if (!pokemon) {
      throw new Error('Pokemon not found');
    }

    return pokemon;
  }

  getPokemonTypeList() {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
    ]
  }


}
