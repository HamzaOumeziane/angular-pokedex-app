import { Directive, ElementRef, HostListener, input } from '@angular/core';
import { getBorderColor } from '../models/pokemon.model';

@Directive({
  selector: '[appPokemonBorder]',
  standalone: true
})
export class PokemonBorderDirective {
  pokemonType = input.required<string>();
  private initialColor: string;


  constructor(private el: ElementRef) { 
    this.initialColor = this.el.nativeElement.style.borderColor;
    this.el.nativeElement.style.borderWidth = '2px';
  }

  private setBorder(color: string){
    this.el.nativeElement.style.borderColor = color;
  }

  @HostListener('mouseenter') onMouseEnter(){
    const color = getBorderColor(this.pokemonType());
    this.setBorder(color);
  }

  @HostListener('mouseleave') onMouseLeave(){
    const color = this.initialColor;
    this.setBorder(color);
  }

  

}
