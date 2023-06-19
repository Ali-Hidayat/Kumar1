import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjecListingComponent } from './components/projec-listing/projec-listing.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MediaComponent } from './components/media/media.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProjecListingComponent,
    ProjectDetailComponent,
    AboutUsComponent,
    MediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
