import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPageDetailsComponent } from './project-page-details.component';

describe('ProjectPageDetailsComponent', () => {
  let component: ProjectPageDetailsComponent;
  let fixture: ComponentFixture<ProjectPageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPageDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
