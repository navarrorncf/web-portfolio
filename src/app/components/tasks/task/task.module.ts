import { NgModule } from '@angular/core'
import { TaskComponent } from './task.component'
import { DatePipe } from '@angular/common'
import { CardModule } from '../../ui/card/card.module'

@NgModule({
  imports: [CardModule, DatePipe],
  declarations: [TaskComponent],
  exports: [TaskComponent],
})
export class TaskModule {}
