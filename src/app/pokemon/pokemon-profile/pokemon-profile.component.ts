import { Component, signal, inject } from '@angular/core';
import { PokemonService } from '../pokemon-services/pokemon.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pokemon-profile',
  imports: [DatePipe, RouterLink],
  templateUrl: './pokemon-profile.component.html',
  styles: ``,
  standalone: true
})
export class PokemonProfileComponent {
  readonly pokemonService = inject(PokemonService);
  readonly route = inject(ActivatedRoute);
  readonly pokemonId = Number(this.route.snapshot.paramMap.get('id'));
  readonly pokemon = signal(this.pokemonService.getPokemon(this.pokemonId)).asReadonly();
}
