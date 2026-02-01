import { inject, Injectable } from '@angular/core'
import { SettingsService } from '../settings/settings.service'

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private settingsService = inject(SettingsService)

  private pathPrefix = '/'

  constructor() {
    const settings = this.settingsService.getSettings()
    this.pathPrefix += settings.locale
  }

  navigateToHome(): void {
    window.location.href = `${this.pathPrefix}/`
  }

  navigateToSignIn(): void {
    window.location.replace(`${this.pathPrefix}/login`)
  }

  navigateToSignOn(): void {
    window.location.replace(`${this.pathPrefix}/register`)
  }
}
