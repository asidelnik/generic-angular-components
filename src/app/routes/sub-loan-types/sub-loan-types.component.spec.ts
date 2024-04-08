import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubLoanTypesComponent } from './sub-loan-types.component';

describe('SubLoanTypesComponent', () => {
  let component: SubLoanTypesComponent;
  let fixture: ComponentFixture<SubLoanTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubLoanTypesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubLoanTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
