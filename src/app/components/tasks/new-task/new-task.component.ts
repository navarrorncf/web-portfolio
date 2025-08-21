import { Component, EventEmitter, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() closetaskdraft = new EventEmitter<void>()

  title = ''
  summary = ''
  dueDate = ''

  onCloseTaskDraft() {
    this.closetaskdraft.emit()
  }

  onSubmitNewTask() {
    console.log({
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate,
    })
  }
}
