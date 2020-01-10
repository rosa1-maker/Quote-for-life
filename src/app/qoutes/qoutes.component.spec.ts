import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QoutesComponent } from './qoutes.component';

describe('QoutesComponent', () => {
  let component: QoutesComponent;
  let fixture: ComponentFixture<QoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
