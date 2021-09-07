import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopNameMapComponent } from './stop-name-map.component';

describe('StopNameMapComponent', () => {
  let component: StopNameMapComponent;
  let fixture: ComponentFixture<StopNameMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopNameMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopNameMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
