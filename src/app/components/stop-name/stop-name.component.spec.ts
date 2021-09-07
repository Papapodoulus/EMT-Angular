import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopNameComponent } from './stop-name.component';

describe('StopNameComponent', () => {
  let component: StopNameComponent;
  let fixture: ComponentFixture<StopNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
