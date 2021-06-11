import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypewriterHeadingComponent } from './typewriter-heading.component';

describe('TypewriterHeadingComponent', () => {
  let component: TypewriterHeadingComponent;
  let fixture: ComponentFixture<TypewriterHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypewriterHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypewriterHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
