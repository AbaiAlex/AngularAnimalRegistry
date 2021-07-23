import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatEditedDataComponent } from './cat-edited-data.component';

describe('CatEditedDataComponent', () => {
  let component: CatEditedDataComponent;
  let fixture: ComponentFixture<CatEditedDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatEditedDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatEditedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
