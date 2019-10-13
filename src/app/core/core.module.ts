import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule, // browser support
    BrowserAnimationsModule, // for animations
    ToastrModule.forRoot({
      timeOut: 2000,
      preventDuplicates: true
    })
  ]
})
export class CoreModule { }
