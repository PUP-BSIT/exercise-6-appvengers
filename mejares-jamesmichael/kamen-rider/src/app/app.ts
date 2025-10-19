import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KamenRiderFormComponent, KamenRider } from './kamen-rider-form/kamen-rider-form';
import { KamenRiderListComponent } from './kamen-rider-list/kamen-rider-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, KamenRiderFormComponent, KamenRiderListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class AppComponent {
  // Properties at the top
  title = 'Kamen Rider Manager';
  riders: KamenRider[] = [];

  // Methods at the bottom
  onRiderAdded(rider: KamenRider): void {
    this.riders.push(rider);
  }
}
