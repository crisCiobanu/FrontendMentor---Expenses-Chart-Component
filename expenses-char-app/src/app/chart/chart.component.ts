import {Component, Input, OnInit} from '@angular/core';
import {ExpenseModel} from "../models/expense.model";

@Component({
  selector: 'app-chart[expenses]',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() expenses!: ExpenseModel[] | null;

  total : number = 0;

  max : number = Number.MIN_SAFE_INTEGER;

  constructor() { }

  ngOnInit(): void {
    const amounts = this.expenses?.map(expense => expense.amount);
    this.expenses?.map(expense => expense.amount).forEach(amount => {
      this.total+=amount
    });

    amounts?.forEach(x => {
      this.max = x > this.max ? x : this.max;
    })

  }

}
