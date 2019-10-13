import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule, // browser support
    BrowserAnimationsModule, // for animations
    ToastrModule.forRoot({
      timeOut: 2000,
      preventDuplicates: true
    }),
    HttpClientModule
  ],
  providers: [
    UsersService
  ]
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
