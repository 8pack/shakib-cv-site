import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMobileCimhCrowdsourcedComponent } from './page-mobile-cimh-crowdsourced.component';

describe('PageMobileCimhCrowdsourcedComponent', () => {
  let component: PageMobileCimhCrowdsourcedComponent;
  let fixture: ComponentFixture<PageMobileCimhCrowdsourcedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMobileCimhCrowdsourcedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMobileCimhCrowdsourcedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
