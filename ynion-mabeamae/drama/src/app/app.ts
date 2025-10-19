import { Component, signal } from '@angular/core';
import { Dramas } from './dramas/dramas';

@Component({
  selector: 'app-root',
  imports: [Dramas],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('drama');
}
