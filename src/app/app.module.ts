import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
import { HeaderModule } from './components/header/header.module'
import { TasksModule } from './components/tasks/tasks.module'
import { UserModule } from './components/user/user.module'

@NgModule({
  imports: [BrowserModule, HeaderModule, TasksModule, UserModule],
  declarations: [AppComponent], // Declare your components here
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
