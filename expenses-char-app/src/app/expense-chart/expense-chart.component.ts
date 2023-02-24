import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-expense-chart[balance]',
  templateUrl: './expense-chart.component.html',
  styleUrls: ['./expense-chart.component.scss']
})
export class ExpenseChartComponent implements OnInit {

  @Input() balance! : number;

  constructor() { }

  ngOnInit(): void {
  }

}
