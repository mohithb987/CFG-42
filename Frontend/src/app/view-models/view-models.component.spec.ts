import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewModelsComponent } from './view-models.component';

describe('ViewModelsComponent', () => {
  let component: ViewModelsComponent;
  let fixture: ComponentFixture<ViewModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
