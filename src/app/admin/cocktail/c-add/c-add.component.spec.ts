import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CAddComponent } from './c-add.component';

describe('CAddComponent', () => {
  let component: CAddComponent;
  let fixture: ComponentFixture<CAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
