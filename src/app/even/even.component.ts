import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  @Input('number') number: number
  constructor() { }

  ngOnInit(): void {
  }

  isOdd(num) { return num % 2;}
}