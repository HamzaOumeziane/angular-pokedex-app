import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Pikachu';
  life = 23;

  incrementLife(){
    console.log('incrementing life');
    alert('incrementing life');
    this.life += 1;
  }

  decrementLife(){
    console.log('decrementing life');
    alert('decrementing life');
    this.life -= 1;
  }
}
