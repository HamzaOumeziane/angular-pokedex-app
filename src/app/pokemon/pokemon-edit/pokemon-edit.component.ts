import { Component, inject, signal } from '@angular/core';
import { PokemonService } from '../pokemon-services/pokemon.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe, JsonPipe } from '@angular/common';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { getBorderColor, POKEMON_RULES } from '../../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-edit',
  imports: [RouterLink, ReactiveFormsModule, JsonPipe],
  templateUrl: './pokemon-edit.component.html',
  styles: ``
})
export class PokemonEditComponent {
  pokemonService = inject(PokemonService)
  route = inject(ActivatedRoute);
  pokemonId = Number(this.route.snapshot.paramMap.get('id'));
  pokemon = signal(this.pokemonService.getPokemon(this.pokemonId)).asReadonly();

  getBorderColor = getBorderColor;

  readonly POKEMON_RULES = signal(POKEMON_RULES).asReadonly();

  getColorText(type: string): string {
    return type === 'Electrik' ? 'black' : 'white';
  }

  readonly form = new FormGroup({
    name: new FormControl(this.pokemon().name, [
      Validators.required, 
      Validators.minLength(POKEMON_RULES.MIN_NAME),
      Validators.maxLength(POKEMON_RULES.MAX_NAME),
      Validators.pattern(POKEMON_RULES.NAME_PATTERN)
    ]),
    life: new FormControl(this.pokemon().life),
    damage: new FormControl(this.pokemon().damage),
    types: new FormArray(
      this.pokemon().types.map(type => new FormControl(type)), [
        Validators.required,
        Validators.maxLength(POKEMON_RULES.MAX_TYPES),
      ]
    )
  })

  get pokemonTypeList(): FormArray {
    return this.form.get('types') as FormArray;
  }

  get pokemonName(){
    return this.form.get('name') as FormControl;
  }

  get pokemonLife(){
    return this.form.get('life') as FormControl;
  }

  incrementLife(){
    const newValue = this.pokemonLife.value + 1;
    this.pokemonLife.setValue(newValue);
  }

  decrementLife(){
    const newValue = this.pokemonLife.value - 1;
    this.pokemonLife.setValue(newValue);
  }

  get pokemonDamage(){
    return this.form.get('damage') as FormControl;
  }

  incrementDamage(){
    const newValue = this.pokemonDamage.value + 1;
    this.pokemonDamage.setValue(newValue);
  }

  decrementDamage(){
    const newValue = this.pokemonDamage.value - 1;
    this.pokemonDamage.setValue(newValue)
  }

  isPokemonTypeSelected(type: string): boolean {
    return !!this.pokemonTypeList.controls.find(control => control.value === type);
  }

  onPokemonTypeChange(type: string, isChecked: boolean): void {
    if (isChecked){
      const control = new FormControl(type);
      this.pokemonTypeList.push(control);
    }else{
      const index = this.pokemonTypeList.controls.map((control) => control.value).indexOf(type);
      this.pokemonTypeList.removeAt(index);
    }
  }

  onSubmit(): void {
    console.log(this.form.value)
  }
}
