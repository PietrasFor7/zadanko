import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kalkulator3Component } from './kalkulator3.component';

describe('Kalkulator3Component', () => {
  let component: Kalkulator3Component;
  let fixture: ComponentFixture<Kalkulator3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kalkulator3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kalkulator3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
