import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './new-component/new-component.component';
import { InputtComponent } from './inputt/inputt.component';
import { OutputComponent } from './output/output.component';



@NgModule({
  declarations: [
    NewComponentComponent,
    InputtComponent,
    OutputComponent
  ],
  exports: [NewComponentComponent, InputtComponent, OutputComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
