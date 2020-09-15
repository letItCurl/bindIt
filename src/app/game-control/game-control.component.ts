import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output("payload") payload = new EventEmitter<{counter: number}>();
  interval: any;
  counter = 0; 
  constructor() { }

  ngOnInit(): void {
  }

  onStart(){
    this.interval = setInterval(()=>{ this.onInterval() }, 300);
  }
  
  onStop(){
    clearInterval(this.interval);
  }

  onClear(){
    this.counter = 0;
    this.onCounterChange()
  }

  onInterval(){
    this.counter++;
    this.onCounterChange()
  }

  onCounterChange(){
    this.payload.emit({counter: this.counter})
  }
}
