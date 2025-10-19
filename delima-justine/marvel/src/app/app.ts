import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Marvel } from "./marvel/marvel";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Marvel],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('marvel');
}
