import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';

import { RouterComponent } from './router/router.component';

import { AuthReducer } from './store/auth.reducer';

@NgModule({
  declarations: [RouterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule,
    StoreModule.forRoot({
      auth: AuthReducer,
    }),
  ],
  providers: [],
  bootstrap: [RouterComponent],
})
export class AppModule {}
