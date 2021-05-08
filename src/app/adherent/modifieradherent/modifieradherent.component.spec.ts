import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieradherentComponent } from './modifieradherent.component';

describe('ModifieradherentComponent', () => {
  let component: ModifieradherentComponent;
  let fixture: ComponentFixture<ModifieradherentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifieradherentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifieradherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
