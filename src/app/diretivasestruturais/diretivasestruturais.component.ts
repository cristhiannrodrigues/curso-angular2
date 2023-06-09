import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivasestruturais',
  templateUrl: './diretivasestruturais.component.html',
  styleUrls: ['./diretivasestruturais.component.sass']
})
export class DiretivasestruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{nome: string}> = [
    {nome: "Cristhiann Rodrigues"},
    {nome: "Keyth Rodrigues"},
    {nome: "Cecilia Pereira"},
    {nome: "Pedro Victor"}
  ];

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

  public onClickAddListt() {
    this.list.push({nome: "Val"});
  }

}
