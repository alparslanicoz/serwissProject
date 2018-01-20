import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServisDetayComponent } from './servis-detay.component';

describe('ServisDetayComponent', () => {
  let component: ServisDetayComponent;
  let fixture: ComponentFixture<ServisDetayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServisDetayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServisDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
