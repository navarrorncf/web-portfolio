import { Component, Input } from '@angular/core'
import { NewTaskComponent } from './new-task/new-task.component'
import { TaskComponent } from './task/task.component'
import { TasksService } from './tasks.service'
import { TaskDraft } from './tasks.model'
import { User } from '../user/user.model'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NewTaskComponent, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user!: User

  constructor(private tasksService: TasksService) {}

  isTaskDraftOpen = false

  onCloseTaskDraft() {
    this.isTaskDraftOpen = false
  }

  onOpenTaskDraft() {
    this.isTaskDraftOpen = true
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.user.id)
  }

  onSaveTaskDraft(task: TaskDraft) {
    this.tasksService.addNewTask(task)
    this.onCloseTaskDraft()
  }
}
