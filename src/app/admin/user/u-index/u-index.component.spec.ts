import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIndexComponent } from './u-index.component';

describe('UIndexComponent', () => {
  let component: UIndexComponent;
  let fixture: ComponentFixture<UIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
