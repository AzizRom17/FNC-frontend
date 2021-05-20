import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterreglementcotisationComponent } from './consulterreglementcotisation.component';

describe('ConsulterreglementcotisationComponent', () => {
  let component: ConsulterreglementcotisationComponent;
  let fixture: ComponentFixture<ConsulterreglementcotisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterreglementcotisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterreglementcotisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
