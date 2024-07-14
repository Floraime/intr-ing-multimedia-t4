import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralUsageComponent } from './general-usage.component';

describe('GeneralUsageComponent', () => {
  let component: GeneralUsageComponent;
  let fixture: ComponentFixture<GeneralUsageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralUsageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
