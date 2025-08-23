import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TaskComponent } from './task.component'
import { UiModule } from '../../ui/ui.module'

describe('TaskComponent', () => {
  let component: TaskComponent
  let fixture: ComponentFixture<TaskComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskComponent],
      imports: [UiModule],
    }).compileComponents()

    fixture = TestBed.createComponent(TaskComponent)
    fixture.componentRef.setInput('task', {
      title: 'Mock Task',
      summary: 'This is a mock task',
      dueDate: '2025-12-31',
    })
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
