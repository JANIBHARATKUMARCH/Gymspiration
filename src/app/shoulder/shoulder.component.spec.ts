import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoulderComponent } from './shoulder.component';

describe('ShoulderComponent', () => {
  let component: ShoulderComponent;
  let fixture: ComponentFixture<ShoulderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoulderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoulderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
