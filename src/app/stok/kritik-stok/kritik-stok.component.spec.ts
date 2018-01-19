import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KritikStokComponent } from './kritik-stok.component';

describe('KritikStokComponent', () => {
  let component: KritikStokComponent;
  let fixture: ComponentFixture<KritikStokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KritikStokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KritikStokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
