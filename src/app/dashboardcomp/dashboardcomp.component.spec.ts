import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardcompComponent } from './dashboardcomp.component';

describe('DashboardcompComponent', () => {
  let component: DashboardcompComponent;
  let fixture: ComponentFixture<DashboardcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
