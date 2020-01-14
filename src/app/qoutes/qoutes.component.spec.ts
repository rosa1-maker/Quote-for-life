import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QouteComponent } from './qoutes.component';

describe('QouteComponent', () => {
  let component: QouteComponent;
  let fixture: ComponentFixture<QouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
