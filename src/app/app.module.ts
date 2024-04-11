import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecaptchaModule, RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from "ng-recaptcha";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TypewriterHeadingComponent } from './typewriter-heading/typewriter-heading.component';
import { SubheadingComponent } from './subheading/subheading.component';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';
import { AboutMeListItemComponent } from './about-me-list-item/about-me-list-item.component';
import { AboutMeHeaderComponent } from './about-me-header/about-me-header.component';
import { ContactmeFormComponent } from './contactme-form/contactme-form.component';
import { ContactService } from './contact.service';
import { SkillItemComponent } from './skill-item/skill-item.component';
import { BannerHeyThereComponent } from './banner-hey-there/banner-hey-there.component';
import { ProjectPageDetailsComponent } from './project-page-details/project-page-details.component';
import { ProjectPagePreviewComponent } from './project-page-preview/project-page-preview.component';
import { ShowProjectPreviewsComponent } from './show-project-previews/show-project-previews.component';

const RECAPTCHA_V3_SHAKIBSMALL = '6LdfguQiAAAAAPms-cZ2zcMCDaMyDz150m4hjcw7';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TypewriterHeadingComponent,
    SubheadingComponent,
    ProjectPreviewComponent,
    AboutMeListItemComponent,
    AboutMeHeaderComponent,
    ContactmeFormComponent,
    SkillItemComponent,
    RoutingComponents,
    BannerHeyThereComponent,
    ProjectPageDetailsComponent,
    ProjectPagePreviewComponent,
    ShowProjectPreviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaV3Module,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ContactService,
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: RECAPTCHA_V3_SHAKIBSMALL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
