import { Injectable } from '@angular/core'
import { Task, TaskDraft } from './tasks.model'
import { v7 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks: Task[] = []

  constructor() {
    const tasks = localStorage.getItem('tasks')
    if (tasks) {
      this.tasks = JSON.parse(tasks)
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId)
  }

  addNewTask(task: TaskDraft) {
    this.tasks.push({ ...task, id: uuid() })
    this.updateTasks()
  }

  completeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId)
    this.updateTasks()
  }

  updateTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}
