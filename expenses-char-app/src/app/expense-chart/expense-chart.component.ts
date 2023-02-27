import {Component, Inject, Input, OnInit} from '@angular/core';
import {ExpenseService} from "../expense.service";

@Component({
  selector: 'app-expense-chart[balance]',
  templateUrl: './expense-chart.component.html',
  styleUrls: ['./expense-chart.component.scss']
})
export class ExpenseChartComponent implements OnInit {

  @Input() balance! : number;

  data$ = this.expenseService.getExpenses();

  constructor(private readonly expenseService: ExpenseService) { }

  ngOnInit(): void {
  }

}
