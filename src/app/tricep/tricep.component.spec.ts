import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TricepComponent } from './tricep.component';

describe('TricepComponent', () => {
  let component: TricepComponent;
  let fixture: ComponentFixture<TricepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TricepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TricepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
