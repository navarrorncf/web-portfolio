import { NgModule } from '@angular/core'
import { NewTaskComponent } from './new-task.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [FormsModule],
  declarations: [NewTaskComponent],
  exports: [NewTaskComponent],
})
export class NewTaskModule {}
