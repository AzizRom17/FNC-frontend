import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglementassuranceComponent } from './reglementassurance.component';

describe('ReglementassuranceComponent', () => {
  let component: ReglementassuranceComponent;
  let fixture: ComponentFixture<ReglementassuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReglementassuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglementassuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
