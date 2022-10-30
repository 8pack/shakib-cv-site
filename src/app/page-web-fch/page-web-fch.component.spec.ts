import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWebFchComponent } from './page-web-fch.component';

describe('PageWebFchComponent', () => {
  let component: PageWebFchComponent;
  let fixture: ComponentFixture<PageWebFchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWebFchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWebFchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
