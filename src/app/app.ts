import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home],
  template: `
              <app-header />
              <app-home></app-home>
              `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('96pens');
}
