import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactmeFormComponent } from './contactme-form.component';

describe('ContactmeFormComponent', () => {
  let component: ContactmeFormComponent;
  let fixture: ComponentFixture<ContactmeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactmeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactmeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
