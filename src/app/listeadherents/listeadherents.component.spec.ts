import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeadherentsComponent } from './listeadherents.component';

describe('ListeadherentsComponent', () => {
  let component: ListeadherentsComponent;
  let fixture: ComponentFixture<ListeadherentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeadherentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeadherentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
