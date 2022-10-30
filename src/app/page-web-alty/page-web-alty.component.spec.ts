import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWebAltyComponent } from './page-web-alty.component';

describe('PageWebAltyComponent', () => {
  let component: PageWebAltyComponent;
  let fixture: ComponentFixture<PageWebAltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWebAltyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWebAltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
