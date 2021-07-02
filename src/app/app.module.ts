import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ManualcompComponent } from './manualcomponent/manualcomp.component';
import { SignupComponent } from './signup/signup.component';
import { TeamcardComponent } from './teamcard/teamcard.component';
import { LoggingService } from './logging.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGaurdService } from './auth-gaurd.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TeamcardComponent,
    ManualcompComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthGaurdService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }

