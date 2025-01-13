import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-analytics',
  standalone: true, // Ensures the component works without a module, using Angular's standalone components feature.
  imports: [ChartModule, CardModule, DividerModule],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'] // Corrected `styleUrl` to `styleUrls`.
})
export class AnalyticsComponentComponent {
  // Chart data for the example.
  chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Series A',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };
}
