import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWebWeplantinComponent } from './page-web-weplantin.component';

describe('PageWebWeplantinComponent', () => {
  let component: PageWebWeplantinComponent;
  let fixture: ComponentFixture<PageWebWeplantinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWebWeplantinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWebWeplantinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
