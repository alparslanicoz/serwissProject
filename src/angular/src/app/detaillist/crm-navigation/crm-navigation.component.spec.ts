import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmNavigationComponent } from './crm-navigation.component';

describe('CrmNavigationComponent', () => {
  let component: CrmNavigationComponent;
  let fixture: ComponentFixture<CrmNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
