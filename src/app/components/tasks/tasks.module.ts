import { NgModule } from '@angular/core'
import { TasksComponent } from './tasks.component'
import { TaskModule } from './task/task.module'
import { NewTaskModule } from './new-task/new-task.module'

@NgModule({
  imports: [NewTaskModule, TaskModule],
  declarations: [TasksComponent],
  providers: [],
  exports: [TasksComponent],
})
export class TasksModule {}
