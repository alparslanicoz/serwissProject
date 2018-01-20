import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TediyeComponent } from './tediye.component';

describe('TediyeComponent', () => {
  let component: TediyeComponent;
  let fixture: ComponentFixture<TediyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TediyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TediyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
