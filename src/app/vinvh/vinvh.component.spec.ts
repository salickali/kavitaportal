import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinvhComponent } from './vinvh.component';

describe('VinvhComponent', () => {
  let component: VinvhComponent;
  let fixture: ComponentFixture<VinvhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinvhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinvhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
