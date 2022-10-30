import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMobileCimhAppComponent } from './page-mobile-cimh-app.component';

describe('PageMobileCimhAppComponent', () => {
  let component: PageMobileCimhAppComponent;
  let fixture: ComponentFixture<PageMobileCimhAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMobileCimhAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMobileCimhAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
