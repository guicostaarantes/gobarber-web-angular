import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';

import { AppRoutingModule } from './app-routing.module';
import { RouterComponent } from './router/router.component';

@NgModule({
  declarations: [RouterComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule],
  providers: [],
  bootstrap: [RouterComponent],
})
export class AppModule {}
