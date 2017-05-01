import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbFieldNumberComponent } from './dbfieldnumber.component';

describe('DbfieldnumberComponent', () => {
  let component: DbFieldNumberComponent;
  let fixture: ComponentFixture<DbFieldNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbFieldNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbFieldNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
