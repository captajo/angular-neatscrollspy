import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicthemeComponent } from './basictheme.component';

describe('BasicthemeComponent', () => {
  let component: BasicthemeComponent;
  let fixture: ComponentFixture<BasicthemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicthemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicthemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
