import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishEditedDataComponent } from './fish-edited-data.component';

describe('FishEditedDataComponent', () => {
  let component: FishEditedDataComponent;
  let fixture: ComponentFixture<FishEditedDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishEditedDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FishEditedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
