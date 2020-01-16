export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.userSettings = new Map();
  }

  set setTheme(value) {
    if (value === 'dark' || value === 'light' || value === 'gray') {
      this.userSettings.set('theme', value);
    }
  }

  set setMusic(value) {
    if (value === 'trance' || value === 'pop' || value === 'rock' || value === 'chillout' || value === 'off') {
      this.userSettings.set('music', value);
    }
  }

  set setDifficult(value) {
    if (value === 'normal' || value === 'hard' || value === 'nightmare') {
      this.userSettings.set('difficulty', value);
    }
  }

  get settings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}
