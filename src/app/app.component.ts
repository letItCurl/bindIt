import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bindIt';
  payload: {counter: number}

  onConsole(event){
    console.log(event)
  }

  onPayload(event: {counter: number}){
    this.payload = event
  }
}
