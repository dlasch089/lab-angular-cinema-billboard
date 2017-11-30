import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMyMovieComponent } from './page-my-movie.component';

describe('PageMyMovieComponent', () => {
  let component: PageMyMovieComponent;
  let fixture: ComponentFixture<PageMyMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMyMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMyMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
