import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLibComponent } from './menu-lib.component';

describe('MenuLibComponent', () => {
  let component: MenuLibComponent;
  let fixture: ComponentFixture<MenuLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
