import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UAddComponent } from './u-add.component';

describe('UAddComponent', () => {
  let component: UAddComponent;
  let fixture: ComponentFixture<UAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
