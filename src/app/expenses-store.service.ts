import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface Expense {
  id: number;
  description: string;
  price: number;
  quantity: number;
  date_created: Date;
}
interface ExpensesState {
  expenses: Expense[];
}

const DEFAULT_STATE: ExpensesState = {
  expenses: [
    {
      id: 1,
      description: 'Coconut water',
      quantity: 1,
      price: 1.99,
      date_created: new Date(),
    },
  ],
};

@Injectable({
  providedIn: 'root',
})
export class ExpensesStore extends ComponentStore<ExpensesState> {
  expenses$ = this.select((s) => s.expenses);
  constructor() {
    super(DEFAULT_STATE);
  }
}
