import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-inputt [contador] = "addValue"></app-inputt>
  <br>
  <button (click)="add()" >Add</button>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

  public addValue: number = 0;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      console.log(1);
    }, 5000);
  }

  public add() {
    this.addValue += 1;
  }

}
