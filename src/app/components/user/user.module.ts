import { NgModule } from '@angular/core'
import { UserComponent } from './user.component'
import { UiModule } from '../ui/ui.module'

@NgModule({
  imports: [UiModule],
  declarations: [UserComponent],
  exports: [UserComponent],
})
export class UserModule {}
