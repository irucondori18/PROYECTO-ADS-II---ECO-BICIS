import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoPersonalFormComponent } from './prestamo-personal-form.component';

describe('PrestamoPersonalFormComponent', () => {
  let component: PrestamoPersonalFormComponent;
  let fixture: ComponentFixture<PrestamoPersonalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestamoPersonalFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoPersonalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
