import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CapitalizePipe } from './shared/capitalize.pipe';
import { HighlightDirective } from './shared/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CapitalizePipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
