import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NewTaskComponent } from './new-task.component'
import { FormsModule } from '@angular/forms'

describe('NewTaskComponent', () => {
  let component: NewTaskComponent
  let fixture: ComponentFixture<NewTaskComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewTaskComponent],
      imports: [FormsModule],
    }).compileComponents()

    fixture = TestBed.createComponent(NewTaskComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
