import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWebMusicComponent } from './page-web-music.component';

describe('PageWebMusicComponent', () => {
  let component: PageWebMusicComponent;
  let fixture: ComponentFixture<PageWebMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWebMusicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWebMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
