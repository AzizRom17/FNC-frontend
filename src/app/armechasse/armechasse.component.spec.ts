import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmechasseComponent } from './armechasse.component';

describe('ArmechasseComponent', () => {
  let component: ArmechasseComponent;
  let fixture: ComponentFixture<ArmechasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmechasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmechasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
