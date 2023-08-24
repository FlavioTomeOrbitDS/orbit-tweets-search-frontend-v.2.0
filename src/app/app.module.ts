import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { FormsModule } from '@angular/forms';
import { ExternalPageComponent } from './components/external-page/external-page.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [AppComponent, SearchPageComponent, ExternalPageComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
