import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { PageWebEmceltdComponent } from './page-web-emceltd/page-web-emceltd.component';
import { PageWebPatriotsslComponent } from './page-web-patriotssl/page-web-patriotssl.component';
import { ShowProjectPreviewsComponent } from './show-project-previews/show-project-previews.component';

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
    PageWebEmceltdComponent,
    PageWebPatriotsslComponent,
    ShowProjectPreviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
