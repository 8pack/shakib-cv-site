import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWebCimhScriptcaseComponent } from './page-web-cimh-scriptcase.component';

describe('PageWebCimhScriptcaseComponent', () => {
  let component: PageWebCimhScriptcaseComponent;
  let fixture: ComponentFixture<PageWebCimhScriptcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWebCimhScriptcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWebCimhScriptcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
