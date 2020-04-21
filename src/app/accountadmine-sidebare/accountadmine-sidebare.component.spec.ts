import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountadmineSidebareComponent } from './accountadmine-sidebare.component';

describe('AccountadmineSidebareComponent', () => {
  let component: AccountadmineSidebareComponent;
  let fixture: ComponentFixture<AccountadmineSidebareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountadmineSidebareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountadmineSidebareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
