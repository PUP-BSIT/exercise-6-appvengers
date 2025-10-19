import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnePiece } from "./one_piece/one";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OnePiece],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('one_piece');
}
