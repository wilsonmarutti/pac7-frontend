import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevisaoSemanaComponent } from './previsao-semana.component';

describe('PrevisaoSemanaComponent', () => {
  let component: PrevisaoSemanaComponent;
  let fixture: ComponentFixture<PrevisaoSemanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrevisaoSemanaComponent]
    });
    fixture = TestBed.createComponent(PrevisaoSemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
