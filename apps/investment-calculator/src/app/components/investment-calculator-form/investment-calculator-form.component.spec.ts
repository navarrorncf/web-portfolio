import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InvestmentCalculatorFormComponent } from './investment-calculator-form.component'

describe('InvestmentCalculatorFormComponent', () => {
  let component: InvestmentCalculatorFormComponent
  let fixture: ComponentFixture<InvestmentCalculatorFormComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentCalculatorFormComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(InvestmentCalculatorFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
