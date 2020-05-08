import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';

import { RouterComponent } from './router/router.component';

import { AuthReducer } from './store/auth.reducer';

@NgModule({
  declarations: [RouterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot({
      auth: AuthReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [],
  bootstrap: [RouterComponent],
})
export class AppModule {}
