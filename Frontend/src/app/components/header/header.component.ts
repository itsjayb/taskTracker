import { Component, signal } from '@angular/core';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-header',
  imports: [NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  selected = signal<number>(0);

  onSelect(index: number) { 
    this.selected.set(index);
  }

  message = signal<string>('Hello, we are passing data from the parent component to the child component');
}
