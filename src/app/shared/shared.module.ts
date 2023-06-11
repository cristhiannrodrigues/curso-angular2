import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './new-component/new-component.component';
import { InputtComponent } from './inputt/inputt.component';



@NgModule({
  declarations: [
    NewComponentComponent,
    InputtComponent
  ],
  exports: [NewComponentComponent, InputtComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
