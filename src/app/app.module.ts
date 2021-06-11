import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TypewriterHeadingComponent } from './typewriter-heading/typewriter-heading.component';
import { SubheadingComponent } from './subheading/subheading.component';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TypewriterHeadingComponent,
    SubheadingComponent,
    ProjectPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
