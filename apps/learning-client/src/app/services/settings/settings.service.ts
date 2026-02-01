import { Injectable } from '@angular/core'

type UiTheme = 'light' | 'dark'

type Settings = {
  locale: string
  theme: UiTheme
}

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private theme: UiTheme = 'light'
  private locale = 'en-US'

  getSettings(): Settings {
    return {
      locale: this.locale,
      theme: this.theme,
    }
  }
}
