import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOtherCimhPestdiseaseComponent } from './page-other-cimh-pestdisease.component';

describe('PageOtherCimhPestdiseaseComponent', () => {
  let component: PageOtherCimhPestdiseaseComponent;
  let fixture: ComponentFixture<PageOtherCimhPestdiseaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageOtherCimhPestdiseaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOtherCimhPestdiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
