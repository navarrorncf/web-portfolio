import { Component, EventEmitter, inject, Input, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { User } from '../../user/user.model'
import { TasksService } from '../tasks.service'

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) user!: User

  @Output() closetaskdraft = new EventEmitter<void>()

  private tasksService = inject(TasksService)

  title = ''
  summary = ''
  dueDate = ''

  onCloseTaskDraft() {
    this.closetaskdraft.emit()
  }

  onSubmitNewTask() {
    this.tasksService.addNewTask({
      dueDate: this.dueDate,
      summary: this.summary,
      title: this.title,
      userId: this.user.id,
    })
    this.closetaskdraft.emit()
  }
}
