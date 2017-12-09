import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntryEntityComponent } from './data-entry-entity.component';

describe('DataEntryEntityComponent', () => {
  let component: DataEntryEntityComponent;
  let fixture: ComponentFixture<DataEntryEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataEntryEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEntryEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
