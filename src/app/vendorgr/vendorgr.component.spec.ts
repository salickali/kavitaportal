import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorgrComponent } from './vendorgr.component';

describe('VendorgrComponent', () => {
  let component: VendorgrComponent;
  let fixture: ComponentFixture<VendorgrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorgrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
