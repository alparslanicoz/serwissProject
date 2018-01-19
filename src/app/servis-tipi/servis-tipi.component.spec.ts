import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServisTipiComponent } from './servis-tipi.component';

describe('ServisTipiComponent', () => {
  let component: ServisTipiComponent;
  let fixture: ComponentFixture<ServisTipiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServisTipiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServisTipiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
