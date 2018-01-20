import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupTanimlariComponent } from './grup-tanimlari.component';

describe('GrupTanimlariComponent', () => {
  let component: GrupTanimlariComponent;
  let fixture: ComponentFixture<GrupTanimlariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupTanimlariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupTanimlariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
