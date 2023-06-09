import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.sass']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() public title: string = "Bem Vindo";

  constructor() {}
 
  ngOnInit() {}

  ngOnChanges(): void {
    console.log("Foi alterado com sucesso.")
  }

}
