import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterreglementassuranceComponent } from './consulterreglementassurance.component';

describe('ConsulterreglementassuranceComponent', () => {
  let component: ConsulterreglementassuranceComponent;
  let fixture: ComponentFixture<ConsulterreglementassuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterreglementassuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterreglementassuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
