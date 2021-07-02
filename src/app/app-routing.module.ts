import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { CanDeactivateGuard } from './contact/can-deactivate-guard.service';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent,

    children: [
      {
        path: ':id',
        // canActivateChild: [AuthGaurdService],
        component: AboutComponent
      },
      {
        path: ':id/:name',
        // canActivateChild: [AuthGaurdService],
        component: AboutComponent
      }
    ],
  },
  {
    path: 'contact',
    canActivate: [AuthGaurdService],
    canDeactivate: [CanDeactivateGuard],
    component: ContactComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
