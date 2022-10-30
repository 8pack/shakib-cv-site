import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWebPatriotsslComponent } from './page-web-patriotssl.component';

describe('PageWebPatriotsslComponent', () => {
  let component: PageWebPatriotsslComponent;
  let fixture: ComponentFixture<PageWebPatriotsslComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWebPatriotsslComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWebPatriotsslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
