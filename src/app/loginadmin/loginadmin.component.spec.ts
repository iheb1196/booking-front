import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginadminComponent } from './loginadmin.component';

describe('LoginadminComponent', () => {
  let component: LoginadminComponent;
  let fixture: ComponentFixture<LoginadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
