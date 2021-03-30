import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacksquadComponent } from './backsquad.component';

describe('BacksquadComponent', () => {
  let component: BacksquadComponent;
  let fixture: ComponentFixture<BacksquadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacksquadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacksquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
