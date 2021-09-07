import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopCoordinatesComponent } from './stop-coordinates.component';

describe('StopCoordinatesComponent', () => {
  let component: StopCoordinatesComponent;
  let fixture: ComponentFixture<StopCoordinatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopCoordinatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopCoordinatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
