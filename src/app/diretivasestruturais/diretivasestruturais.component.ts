import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivasestruturais',
  templateUrl: './diretivasestruturais.component.html',
  styleUrls: ['./diretivasestruturais.component.sass']
})
export class DiretivasestruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;

  constructor(){}

  ngOnInit(): void {

    setInterval(() => {
      if(this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000);

  }

  public onClick() {
    if(this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

}
