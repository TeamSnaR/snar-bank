import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesStore } from './expenses-store.service';

@Component({
  selector: 'snar-bank-expenses',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Expenses</h2>
    <ng-container *ngIf="expensesStore.expenses$ | async as expenses">
      <ul>
        <li *ngFor="let expense of expenses">
          {{ expense.quantity }} {{ expense.description }} on
          {{ expense.date_created }}
        </li>
      </ul>
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesComponent {
  expensesStore = inject(ExpensesStore);
}
