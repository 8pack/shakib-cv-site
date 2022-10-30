import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { PageWebAltyComponent } from './page-web-alty/page-web-alty.component';
import { PageWebPatriotsslComponent } from './page-web-patriotssl/page-web-patriotssl.component';
import { PageWebEmceltdComponent } from './page-web-emceltd/page-web-emceltd.component';
import { PageWebFchComponent } from './page-web-fch/page-web-fch.component';
import { PageWebMusicComponent } from './page-web-music/page-web-music.component';
import { PageWebCimhScriptcaseComponent } from './page-web-cimh-scriptcase/page-web-cimh-scriptcase.component';
import { PageWebCimhWebalertComponent } from './page-web-cimh-webalert/page-web-cimh-webalert.component';
import { PageWebWeplantinComponent } from './page-web-weplantin/page-web-weplantin.component';

import { PageMobileCimhAppComponent } from './page-mobile-cimh-app/page-mobile-cimh-app.component';
import { PageMobileCimhCrowdsourcedComponent } from './page-mobile-cimh-crowdsourced/page-mobile-cimh-crowdsourced.component';

import { PageOtherCimhPestdiseaseComponent } from './page-other-cimh-pestdisease/page-other-cimh-pestdisease.component';
import { PageOtherCimhFileboundComponent } from './page-other-cimh-filebound/page-other-cimh-filebound.component';
import { PageOtherCimhCidComponent } from './page-other-cimh-cid/page-other-cimh-cid.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'alty', component: PageWebAltyComponent },
  { path: 'patriot', component: PageWebPatriotsslComponent },
  { path: 'emce', component: PageWebEmceltdComponent },
  { path: 'fch', component: PageWebFchComponent },
  { path: 'music', component: PageWebMusicComponent },
  { path: 'cimh-scriptcase', component: PageWebCimhScriptcaseComponent },
  { path: 'cimh-webalert', component: PageWebCimhWebalertComponent },
  { path: 'we_plantin', component: PageWebWeplantinComponent },

  { path: 'cimh-app', component: PageMobileCimhAppComponent },
  { path: 'cimh-crowdsourced', component: PageMobileCimhCrowdsourcedComponent },

  { path: 'cimh-pest_disease', component: PageOtherCimhPestdiseaseComponent },
  { path: 'cimh-filebound', component: PageOtherCimhFileboundComponent },
  { path: 'cimh-cid', component: PageOtherCimhCidComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [ HomeComponent, PageWebAltyComponent, PageWebPatriotsslComponent, PageWebEmceltdComponent,
              PageWebFchComponent, PageWebMusicComponent, PageWebCimhScriptcaseComponent, PageWebCimhWebalertComponent,
              PageWebWeplantinComponent, PageMobileCimhAppComponent, PageMobileCimhCrowdsourcedComponent,
              PageOtherCimhPestdiseaseComponent, PageOtherCimhFileboundComponent, PageOtherCimhCidComponent ]
