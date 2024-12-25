import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = signal('Pikachu');
  life = signal(23);
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

  incrementLife(){
    this.life.update(value => value + 1);
  }

  decrementLife(){
    this.life.update(value => value - 1);
  }

  comebackZero(){
    this.life.set(0);
  }
}
