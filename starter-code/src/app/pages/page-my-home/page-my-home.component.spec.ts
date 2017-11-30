import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMyHomeComponent } from './page-my-home.component';

describe('PageMyHomeComponent', () => {
  let component: PageMyHomeComponent;
  let fixture: ComponentFixture<PageMyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
