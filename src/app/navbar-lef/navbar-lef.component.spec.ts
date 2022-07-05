import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLefComponent } from './navbar-lef.component';

describe('NavbarLefComponent', () => {
  let component: NavbarLefComponent;
  let fixture: ComponentFixture<NavbarLefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarLefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
