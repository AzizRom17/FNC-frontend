import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChienchasseComponent } from './chienchasse.component';

describe('ChienchasseComponent', () => {
  let component: ChienchasseComponent;
  let fixture: ComponentFixture<ChienchasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChienchasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChienchasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
