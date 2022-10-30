import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOtherCimhFileboundComponent } from './page-other-cimh-filebound.component';

describe('PageOtherCimhFileboundComponent', () => {
  let component: PageOtherCimhFileboundComponent;
  let fixture: ComponentFixture<PageOtherCimhFileboundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageOtherCimhFileboundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOtherCimhFileboundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
