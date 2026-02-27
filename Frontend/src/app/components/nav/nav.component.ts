import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  message = input<string>();

  selected = signal<number>(0);

  hover = signal<number>(0);

  onSelect(index: number) {
    this.selected.set(index);
    console.log(this.selected());
  }

  onHover(event: MouseEvent) {
    const index = (event.target as HTMLElement).textContent;
    if (index) {
      this.hover.set(parseInt(index));
      console.log(this.hover(), "LOG");
    }
  }
}
