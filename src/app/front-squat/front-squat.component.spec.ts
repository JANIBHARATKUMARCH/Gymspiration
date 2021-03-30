import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontSquatComponent } from './front-squat.component';

describe('FrontSquatComponent', () => {
  let component: FrontSquatComponent;
  let fixture: ComponentFixture<FrontSquatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontSquatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontSquatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
