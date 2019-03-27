import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpelComponent } from './ampel.component';

describe('AmpelComponent', () => {
  let component: AmpelComponent;
  let fixture: ComponentFixture<AmpelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmpelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmpelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
