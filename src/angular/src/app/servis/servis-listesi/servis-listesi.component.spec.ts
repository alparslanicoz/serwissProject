import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServisListesiComponent } from './servis-listesi.component';

describe('ServisListesiComponent', () => {
  let component: ServisListesiComponent;
  let fixture: ComponentFixture<ServisListesiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServisListesiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServisListesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
