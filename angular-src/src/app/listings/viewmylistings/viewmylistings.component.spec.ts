import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmylistingsComponent } from './viewmylistings.component';

describe('ViewmylistingsComponent', () => {
  let component: ViewmylistingsComponent;
  let fixture: ComponentFixture<ViewmylistingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmylistingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmylistingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
