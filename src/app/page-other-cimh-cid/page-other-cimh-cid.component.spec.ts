import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOtherCimhCidComponent } from './page-other-cimh-cid.component';

describe('PageOtherCimhCidComponent', () => {
  let component: PageOtherCimhCidComponent;
  let fixture: ComponentFixture<PageOtherCimhCidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageOtherCimhCidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOtherCimhCidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
