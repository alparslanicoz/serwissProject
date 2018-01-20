import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GorevListesiComponent } from './gorev-listesi.component';

describe('GorevListesiComponent', () => {
  let component: GorevListesiComponent;
  let fixture: ComponentFixture<GorevListesiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GorevListesiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GorevListesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
