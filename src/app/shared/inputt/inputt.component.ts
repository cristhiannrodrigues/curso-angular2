import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputt',
  templateUrl: './inputt.component.html',
  styleUrls: ['./inputt.component.sass']
})
export class InputtComponent implements OnInit {
  @Input() public contador: number = 0;

  constructor() {}

  ngOnInit(): void {
  }

}
