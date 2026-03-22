import { Component, signal } from '@angular/core';
import { UiList } from './ui-list/ui-list';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UiList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('swapi');
  listNames = ["Films", "Planets", "Spaceships"];
}
