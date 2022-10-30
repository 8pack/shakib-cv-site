import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWebCimhWebalertComponent } from './page-web-cimh-webalert.component';

describe('PageWebCimhWebalertComponent', () => {
  let component: PageWebCimhWebalertComponent;
  let fixture: ComponentFixture<PageWebCimhWebalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWebCimhWebalertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWebCimhWebalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
