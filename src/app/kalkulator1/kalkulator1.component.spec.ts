import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kalkulator1Component } from './kalkulator1.component';

describe('Kalkulator1Component', () => {
  let component: Kalkulator1Component;
  let fixture: ComponentFixture<Kalkulator1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kalkulator1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kalkulator1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
