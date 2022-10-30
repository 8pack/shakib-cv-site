import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWebEmceltdComponent } from './page-web-emceltd.component';

describe('PageWebEmceltdComponent', () => {
  let component: PageWebEmceltdComponent;
  let fixture: ComponentFixture<PageWebEmceltdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWebEmceltdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWebEmceltdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
