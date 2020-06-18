import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VqotComponent } from './vqot.component';

describe('VqotComponent', () => {
  let component: VqotComponent;
  let fixture: ComponentFixture<VqotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VqotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VqotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
