import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBootstrapComponentComponent } from './my-bootstrap-component.component';

describe('MyBootstrapComponentComponent', () => {
  let component: MyBootstrapComponentComponent;
  let fixture: ComponentFixture<MyBootstrapComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBootstrapComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBootstrapComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
