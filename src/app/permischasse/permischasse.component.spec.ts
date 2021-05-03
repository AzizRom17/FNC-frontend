import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermischasseComponent } from './permischasse.component';

describe('PermischasseComponent', () => {
  let component: PermischasseComponent;
  let fixture: ComponentFixture<PermischasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermischasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermischasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
