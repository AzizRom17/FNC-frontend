import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeexerciceComponent } from './listeexercice.component';

describe('ListeexerciceComponent', () => {
  let component: ListeexerciceComponent;
  let fixture: ComponentFixture<ListeexerciceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeexerciceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeexerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
