import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuebarComponent } from './menuebar.component';

describe('MenuebarComponent', () => {
  let component: MenuebarComponent;
  let fixture: ComponentFixture<MenuebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
