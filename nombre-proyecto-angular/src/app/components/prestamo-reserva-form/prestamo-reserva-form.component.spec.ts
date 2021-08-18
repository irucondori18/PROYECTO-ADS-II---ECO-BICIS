import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoReservaFormComponent } from './prestamo-reserva-form.component';

describe('PrestamoReservaFormComponent', () => {
  let component: PrestamoReservaFormComponent;
  let fixture: ComponentFixture<PrestamoReservaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestamoReservaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoReservaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
