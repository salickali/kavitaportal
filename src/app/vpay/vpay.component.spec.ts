import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpayComponent } from './vpay.component';

describe('VpayComponent', () => {
  let component: VpayComponent;
  let fixture: ComponentFixture<VpayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
