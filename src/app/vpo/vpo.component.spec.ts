import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpoComponent } from './vpo.component';

describe('VpoComponent', () => {
  let component: VpoComponent;
  let fixture: ComponentFixture<VpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
