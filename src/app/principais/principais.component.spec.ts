import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipaisComponent } from './principais.component';

describe('PrincipaisComponent', () => {
  let component: PrincipaisComponent;
  let fixture: ComponentFixture<PrincipaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrincipaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincipaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
