import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-analytics.component',
  imports: [ChartModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})

export class AnalyticsComponentComponent {
  chartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  chartType: any = 'bar';

}
