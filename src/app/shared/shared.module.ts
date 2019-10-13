import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZeroPaddingPipe } from './pipes/zero-padding.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [],
  imports: [
    // angular modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // 3rd party compnents
    RouterModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule
  ]
})
export class SharedModule { }
