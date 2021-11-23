import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { OfferingsComponent } from './offerings/offerings.component';
import { ProcessComponent } from './process/process.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { ClientsComponent } from './clients/clients.component';
import { TeamComponent } from './team/team.component';
import { SuperchargeComponent } from './supercharge/supercharge.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    OfferingsComponent,
    ProcessComponent,
    WhyUsComponent,
    ClientsComponent,
    TeamComponent,
    SuperchargeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
