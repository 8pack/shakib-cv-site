import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProjectPreviewsComponent } from './show-project-previews.component';

describe('ShowProjectPreviewsComponent', () => {
  let component: ShowProjectPreviewsComponent;
  let fixture: ComponentFixture<ShowProjectPreviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProjectPreviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProjectPreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
