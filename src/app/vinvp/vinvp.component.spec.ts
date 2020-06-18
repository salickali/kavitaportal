import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinvpComponent } from './vinvp.component';

describe('VinvpComponent', () => {
  let component: VinvpComponent;
  let fixture: ComponentFixture<VinvpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinvpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinvpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
