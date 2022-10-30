import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeListItemComponent } from './about-me-list-item.component';

describe('AboutMeListItemComponent', () => {
  let component: AboutMeListItemComponent;
  let fixture: ComponentFixture<AboutMeListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
