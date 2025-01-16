import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from '../../../../common/navigation/side-nav/side-nav.component';
import { HeaderComponetComponent } from '../../../../common/navigation/header/header.componet/header.componet.component';

@Component({
  selector: 'app-analytics',
  standalone: true, 
  imports: [ChartModule, CardModule, DividerModule, CommonModule, SideNavComponent, HeaderComponetComponent],
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'] 
})
export class AnalyticsComponentComponent {
  sparklineOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  // Weekly sales chart data
  weeklySalesChart = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [100, 200, 150, 300, 250, 400, 350],
        borderColor: '#42A5F5',
        fill: true,
        backgroundColor: 'rgba(66, 165, 245, 0.2)',
      },
    ],
  };

  // New users chart data
  newUsersChart = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [500, 600, 550, 700, 650, 800, 750],
        borderColor: '#FFA726',
        fill: true,
        backgroundColor: 'rgba(255, 167, 38, 0.2)',
      },
    ],
  };

  // Purchase orders chart data
  purchaseOrdersChart = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [300, 350, 400, 450, 500, 550, 600],
        borderColor: '#66BB6A',
        fill: true,
        backgroundColor: 'rgba(102, 187, 106, 0.2)',
      },
    ],
  };

  // Messages chart data
  messagesChart = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [50, 60, 70, 80, 90, 100, 110],
        borderColor: '#AB47BC',
        fill: true,
        backgroundColor: 'rgba(171, 71, 188, 0.2)',
      },
    ],
  };

  // Pie chart data for visits
  visitsChartData = {
    labels: ['Desktop', 'Mobile', 'Tablet'],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
        hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D'],
      },
    ],
  };

  // Legend labels for pie chart
  legendLabels = [
    { color: '#42A5F5', text: 'Desktop' },
    { color: '#66BB6A', text: 'Mobile' },
    { color: '#FFA726', text: 'Tablet' },
  ];

  // Bar chart data for website visits
  chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'This Year',
        data: [200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300],
        backgroundColor: '#42A5F5',
        borderColor: '#1E88E5',
      },
      {
        label: 'Last Year',
        data: [150, 250, 350, 450, 550, 650, 750, 850, 950, 1050, 1150, 1250],
        backgroundColor: '#9CCC65',
        borderColor: '#7CB342',
      },
    ],
  };

  // Options for the pie chart
  pieChartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  // Options for the bar chart
  chartOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          drawBorder: false,
        },
        ticks: {
          stepSize: 200,
        },
      },
    },
  };
}
