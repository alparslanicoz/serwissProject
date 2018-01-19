import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CariDetayComponent } from './cari-detay.component';

describe('CariDetayComponent', () => {
  let component: CariDetayComponent;
  let fixture: ComponentFixture<CariDetayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CariDetayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CariDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
