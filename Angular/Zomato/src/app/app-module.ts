import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Logic } from './logic/logic';
import { Signup } from './signup/signup';
import { About } from './about/about';
import { Services } from './services/services';
import { Contact } from './contact/contact';
import { Login } from './login/login';

@NgModule({
  declarations: [App, Home, Logic, Signup, Login, About, Services, Contact],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
