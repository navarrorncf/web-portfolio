import { ComponentFixture, TestBed } from '@angular/core/testing'

import { UserComponent } from './user.component'
import { UiModule } from '../ui/ui.module'

describe('UserComponent', () => {
  let component: UserComponent
  let fixture: ComponentFixture<UserComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent],
      imports: [UiModule],
    }).compileComponents()

    fixture = TestBed.createComponent(UserComponent)
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
