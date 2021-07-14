import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ManualcompComponent } from './manualcomponent/manualcomp.component';
import { SignupComponent } from './signup/signup.component';
import { TeamcardComponent } from './teamcard/teamcard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { CanDeactivateGuard } from './contact/can-deactivate-guard.service';
import { HttpClientModule } from '@angular/common/http'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TeamcardComponent,
    ManualcompComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    MatIconModule
    
    
  ],
  providers: [
    AuthGaurdService,
    CanDeactivateGuard
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }

