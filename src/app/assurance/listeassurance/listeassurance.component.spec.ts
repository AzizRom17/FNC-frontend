import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeassuranceComponent } from './listeassurance.component';

describe('ListeassuranceComponent', () => {
  let component: ListeassuranceComponent;
  let fixture: ComponentFixture<ListeassuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeassuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeassuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
