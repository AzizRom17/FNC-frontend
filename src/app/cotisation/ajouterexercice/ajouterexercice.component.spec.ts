import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterexerciceComponent } from './ajouterexercice.component';

describe('AjouterexerciceComponent', () => {
  let component: AjouterexerciceComponent;
  let fixture: ComponentFixture<AjouterexerciceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterexerciceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterexerciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
