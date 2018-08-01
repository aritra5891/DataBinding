import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: Array<number> = [];
  evenNumbers: Array<number> = [];


  onStartClicked(number) {
    number % 2 === 0 ? this.evenNumbers.push(number) : this.oddNumbers.push(number);
    console.log(this.evenNumbers);
  }
}
