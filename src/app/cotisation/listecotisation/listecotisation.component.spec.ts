import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecotisationComponent } from './listecotisation.component';

describe('ListecotisationComponent', () => {
  let component: ListecotisationComponent;
  let fixture: ComponentFixture<ListecotisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListecotisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListecotisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
