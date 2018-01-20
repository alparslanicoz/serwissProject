import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CariHareketComponent } from './cari-hareket.component';

describe('CariHareketComponent', () => {
  let component: CariHareketComponent;
  let fixture: ComponentFixture<CariHareketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CariHareketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CariHareketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
