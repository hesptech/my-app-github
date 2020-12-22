import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCodesComponent } from './users-codes.component';

describe('UsersCodesComponent', () => {
  let component: UsersCodesComponent;
  let fixture: ComponentFixture<UsersCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersCodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
