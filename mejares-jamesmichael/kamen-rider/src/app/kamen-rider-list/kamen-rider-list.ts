import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KamenRider } from '../kamen-rider-form/kamen-rider-form';

@Component({
  selector: 'app-kamen-rider-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kamen-rider-list.html',
  styleUrls: ['./kamen-rider-list.scss'],
})
export class KamenRiderListComponent {
  // Properties at the top
  @Input() riders: KamenRider[] = [];

  // Methods at the bottom
  getRiderCount(): number {
    return this.riders.length;
  }
}
