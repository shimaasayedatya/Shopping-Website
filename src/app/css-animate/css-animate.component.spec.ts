import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssAnimateComponent } from './css-animate.component';

describe('CssAnimateComponent', () => {
  let component: CssAnimateComponent;
  let fixture: ComponentFixture<CssAnimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssAnimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssAnimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
