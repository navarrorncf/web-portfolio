import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TasksComponent } from './tasks.component'

describe('TasksComponent', () => {
  let component: TasksComponent
  let fixture: ComponentFixture<TasksComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(TasksComponent)
    fixture.componentRef.setInput('user', {
      id: 'u1',
      name: 'User 1',
      avatar: 'avatar1.png',
    })
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
