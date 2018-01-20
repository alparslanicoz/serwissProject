import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StokHareketComponent } from './stok-hareket.component';

describe('StokHareketComponent', () => {
  let component: StokHareketComponent;
  let fixture: ComponentFixture<StokHareketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StokHareketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StokHareketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
