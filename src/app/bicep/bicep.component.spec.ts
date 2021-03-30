import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BicepComponent } from './bicep.component';

describe('BicepComponent', () => {
  let component: BicepComponent;
  let fixture: ComponentFixture<BicepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BicepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BicepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
