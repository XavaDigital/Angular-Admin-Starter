import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

//Angular material modules
import { MatCheckboxModule } from '@angular/material/checkbox';

//Angular components
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthFooterComponent } from './auth/auth-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AuthFooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
