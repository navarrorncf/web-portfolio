import { Component, Input } from '@angular/core'
import { CardComponent } from "../../ui/card/card.component";

type Task = {
  title: string
  dueDate: string
  summary: string
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task

  onCompleteTask() {
    
  }
}
