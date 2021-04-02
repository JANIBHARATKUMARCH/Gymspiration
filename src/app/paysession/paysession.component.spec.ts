import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysessionComponent } from './paysession.component';

describe('PaysessionComponent', () => {
  let component: PaysessionComponent;
  let fixture: ComponentFixture<PaysessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaysessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
