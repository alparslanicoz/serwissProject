import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeklifComponent } from './teklif.component';

describe('TeklifComponent', () => {
  let component: TeklifComponent;
  let fixture: ComponentFixture<TeklifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeklifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeklifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
