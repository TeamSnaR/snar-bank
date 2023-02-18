import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ExpensesComponent } from './expenses.component';

@Component({
  standalone: true,
  imports: [ExpensesComponent, RouterModule],
  selector: 'snar-bank-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'snar-bank';
}
