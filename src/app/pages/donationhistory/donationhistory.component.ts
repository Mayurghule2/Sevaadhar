import { Component, OnInit } from '@angular/core';
interface DonationRecord {
  date: string;
  receiptNo: string;
  program: string;
  amount: number;
  paymentMethod: string;
  status: 'Successful' | 'Pending';
}
@Component({
  selector: 'app-donationhistory',
  templateUrl: './donationhistory.component.html',
  styleUrls: ['./donationhistory.component.css']
})
export class DonationhistoryComponent implements OnInit {
  records: DonationRecord[] = [
    { date: '2025-04-10', receiptNo: 'SA-2504-1023', program: 'Education',     amount: 5000,  paymentMethod: 'Credit Card', status: 'Successful' },
    { date: '2025-03-15', receiptNo: 'SA-2503-0897', program: 'Healthcare',    amount: 2500,  paymentMethod: 'UPI',         status: 'Successful' },
    { date: '2025-02-28', receiptNo: 'SA-2502-0754', program: 'Nutrition',     amount: 1000,  paymentMethod: 'Net Banking', status: 'Successful' },
    { date: '2025-01-20', receiptNo: 'SA-2501-0612', program: 'Emergency Relief', amount:10000, paymentMethod: 'Credit Card', status: 'Successful' },
    { date: '2024-12-25', receiptNo: 'SA-2412-0543', program: 'Education',     amount: 3000,  paymentMethod: 'UPI',         status: 'Pending' },
  ];
  filtered: DonationRecord[] = [];

  // filters
  programs = ['All Programs','Education','Healthcare','Nutrition','Emergency Relief'];
  statuses = ['All Status','Successful','Pending'];
  filterProg = 'All Programs';
  filterStatus = 'All Status';
  fromDate?: string;
  toDate?: string;

  ngOnInit() {
    this.filtered = [...this.records];
  }

  applyFilters() {
    this.filtered = this.records.filter(r => {
      const okProg = this.filterProg === 'All Programs' || r.program === this.filterProg;
      const okStatus = this.filterStatus === 'All Status' || r.status === this.filterStatus;
      const date = new Date(r.date).getTime();
      const fromOk = !this.fromDate || date >= new Date(this.fromDate).getTime();
      const toOk   = !this.toDate   || date <= new Date(this.toDate).getTime();
      return okProg && okStatus && fromOk && toOk;
    });
  }

  downloadReport() {
    window.print();
  }

  downloadTaxCertificate() {
    // implement service call or redirect here
    console.log('Downloading tax certificate …');
  }

  get totalAmount() {
    return this.filtered.reduce((sum, r) => sum + r.amount, 0);
  }
}
