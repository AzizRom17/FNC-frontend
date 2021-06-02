import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultermessageComponent } from './consultermessage.component';

describe('ConsultermessageComponent', () => {
  let component: ConsultermessageComponent;
  let fixture: ComponentFixture<ConsultermessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultermessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultermessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
