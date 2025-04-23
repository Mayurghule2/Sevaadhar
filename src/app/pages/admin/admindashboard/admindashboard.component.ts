import { Component, AfterViewInit } from '@angular/core';
import {
  Chart,
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  PieController,
  ArcElement,
  Legend,
  Tooltip,
} from 'chart.js';

Chart.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  PieController,
  ArcElement,
  Legend,
  Tooltip
);
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.renderMonthlyDonationChart();
    this.renderCategoryChart();
    this.renderPaymentChart();
  }

  formatNumber(num: number): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  renderMonthlyDonationChart(): void {
    const ctx = document.getElementById('monthlyDonationChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['November', 'December', 'January', 'February', 'March', 'April'],
        datasets: [{
          label: 'Donations (₹)',
          data: [354500, 467800, 389200, 421600, 536700, 493800],
          borderColor: '#118707',
          backgroundColor: 'rgba(17, 135, 7, 0.1)',
          tension: 0.3,
          borderWidth: 2,
          pointBackgroundColor: '#118707',
          pointRadius: 4,
          pointHoverRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: context => '₹' + this.formatNumber(context.parsed.y)
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: value => '₹' + this.formatNumber(Number(value))
            }
          }
        }
      }
    });
  }

  renderCategoryChart(): void {
    const ctx = document.getElementById('categoryChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Education', 'Healthcare', 'Food and Nutrition', 'Women\'s Empowerment', 'Disaster Relief', 'Community Development', 'Support for Differently-Abled'],
        datasets: [{
          data: [28, 22, 15, 12, 10, 8, 5],
          backgroundColor: ['#118707', '#1aaa0d', '#23cc14', '#52d946', '#7ce472', '#a5ef9d', '#ccf9c8'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'right' },
          tooltip: {
            callbacks: {
              label: context => `${context.label}: ${context.parsed}%`
            }
          }
        }
      }
    });
  }

  renderPaymentChart(): void {
    const ctx = document.getElementById('paymentChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Credit Card', 'Debit Card', 'UPI', 'Net Banking', 'Wallet'],
        datasets: [{
          data: [35, 25, 20, 15, 5],
          backgroundColor: ['#118707', '#1aaa0d', '#52d946', '#7ce472', '#a5ef9d'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'right' },
          tooltip: {
            callbacks: {
              label: context => `${context.label}: ${context.parsed}%`
            }
          }
        }
      }
    });
  }
}
