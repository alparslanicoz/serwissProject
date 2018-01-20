import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServislisteComponent } from './servisliste.component';

describe('ServislisteComponent', () => {
  let component: ServislisteComponent;
  let fixture: ComponentFixture<ServislisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServislisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServislisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
