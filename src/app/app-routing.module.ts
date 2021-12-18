import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact_us', component: ContactUsComponent },
  { path: '**', component: HeaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
