import { inject, Injectable } from '@angular/core'
import { SettingsService } from '../settings/settings.service'
import { paths } from '@/constants/paths'

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private settingsService = inject(SettingsService)

  private routes = { ...paths }

  constructor() {
    const settings = this.settingsService.getSettings()
    const pathPrefix = `/${settings.locale}/`

    ;(Object.keys(paths) as (keyof typeof paths)[]).forEach((key) => {
      this.routes[key] = pathPrefix + paths[key]
    })
  }

  navigateTo(route: keyof typeof this.routes): void {
    window.location.href = this.routes[route]
  }

  replaceRoute(route: keyof typeof this.routes): void {
    window.location.replace(route)
  }
}
