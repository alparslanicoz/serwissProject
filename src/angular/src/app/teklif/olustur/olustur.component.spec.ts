import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlusturComponent } from './olustur.component';

describe('OlusturComponent', () => {
  let component: OlusturComponent;
  let fixture: ComponentFixture<OlusturComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlusturComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlusturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
