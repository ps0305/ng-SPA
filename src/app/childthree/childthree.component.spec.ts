import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildthreeComponent } from './childthree.component';

describe('ChildthreeComponent', () => {
  let component: ChildthreeComponent;
  let fixture: ComponentFixture<ChildthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
