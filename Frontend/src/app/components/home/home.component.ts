import { Component } from '@angular/core';
import { RowsComponent } from '../rows/rows.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [RowsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isLoggedIn = false;
  userName = '';
  userTasks = [];
  completed = 0;
}
