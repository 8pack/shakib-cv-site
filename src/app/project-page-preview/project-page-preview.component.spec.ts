import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPagePreviewComponent } from './project-page-preview.component';

describe('ProjectPagePreviewComponent', () => {
  let component: ProjectPagePreviewComponent;
  let fixture: ComponentFixture<ProjectPagePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPagePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPagePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
