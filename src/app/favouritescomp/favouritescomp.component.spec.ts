import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritescompComponent } from './favouritescomp.component';

describe('FavouritescompComponent', () => {
  let component: FavouritescompComponent;
  let fixture: ComponentFixture<FavouritescompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouritescompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritescompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
