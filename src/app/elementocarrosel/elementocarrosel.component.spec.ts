import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementocarroselComponent } from './elementocarrosel.component';

describe('ElementocarroselComponent', () => {
  let component: ElementocarroselComponent;
  let fixture: ComponentFixture<ElementocarroselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElementocarroselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElementocarroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
