import { NgModule } from '@angular/core'
import { UserComponent } from './user.component'
import { CardModule } from '../ui/card/card.module'

@NgModule({
  imports: [CardModule],
  declarations: [UserComponent],
  exports: [UserComponent],
})
export class UserModule {}
