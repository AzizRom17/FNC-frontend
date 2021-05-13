import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglementcotisationComponent } from './reglementcotisation.component';

describe('ReglementcotisationComponent', () => {
  let component: ReglementcotisationComponent;
  let fixture: ComponentFixture<ReglementcotisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReglementcotisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglementcotisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
