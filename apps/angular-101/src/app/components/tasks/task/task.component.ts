import { Component, inject, Input } from '@angular/core'
import { TasksService } from '../tasks.service'
import type { Task } from '../tasks.model'
import { CardComponent } from '../../ui/card/card.component'
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task

  private tasksService = inject(TasksService)

  onCompleteTask() {
    this.tasksService.completeTask(this.task.id)
  }
}
