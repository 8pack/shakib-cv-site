import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerHeyThereComponent } from './banner-hey-there.component';

describe('BannerHeyThereComponent', () => {
  let component: BannerHeyThereComponent;
  let fixture: ComponentFixture<BannerHeyThereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerHeyThereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerHeyThereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
