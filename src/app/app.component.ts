import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Project';
  theme: Theme = 'light-theme'
  initializeTheme = (): void => this.document.body
}

export type Theme = 'light-theme' | 'dark-theme'
