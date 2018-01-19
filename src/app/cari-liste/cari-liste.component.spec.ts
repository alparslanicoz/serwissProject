import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CariListeComponent } from './cari-liste.component';

describe('CariListeComponent', () => {
  let component: CariListeComponent;
  let fixture: ComponentFixture<CariListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CariListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CariListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
