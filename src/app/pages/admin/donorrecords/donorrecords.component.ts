import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { DonorService } from 'src/app/services/donor.service';
import { Doner } from 'src/app/models/donor';
@Component({
  selector: 'app-donorrecords',
  templateUrl: './donorrecords.component.html',
  styleUrls: ['./donorrecords.component.css']
})
export class DonorrecordsComponent {

  donors: Doner[] = [];
  filteredDonors: Doner[] = [];

  constructor(private donerService: DonorService) {}


  purposes: string[] = [
    'Education',
    'Women\'s Empowerment',
    'Disaster Relief',
    'Food and Nutrition',
    'Support for Differently-Abled',
    'Healthcare'
  ];

  ngOnInit(): void {
    this.loadDonors();
  }
  loadDonors(): void {
    this.donerService.getAllDoners().subscribe((data: Doner[]) => {
      this.donors = data;
      this.filteredDonors = [...this.donors];
    });
  }
  

  selectedPurpose = '';
  selectedAmount = '';

  


  applyFilter(): void {
    this.filteredDonors = this.donors.filter(d => {
      const matchPurpose = this.selectedPurpose ? d.purpose === this.selectedPurpose : true;
      let matchAmount = true;

      switch (this.selectedAmount) {
        case '1': matchAmount = d.amount <= 1000; break;
        case '2': matchAmount = d.amount > 1000 && d.amount <= 5000; break;
        case '3': matchAmount = d.amount > 5000 && d.amount <= 20000; break;
        case '4': matchAmount = d.amount >= 20000; break;
      }

      return matchPurpose && matchAmount;
    });
  }
  onPurposeChange(): void {
    this.selectedAmount = '';
    this.applyFilter();
  }
  resetFilter(): void {
    this.selectedPurpose = '';
    this.selectedAmount = '';
    this.filteredDonors = [...this.donors];
  }

  exportToExcel(): void {
    const worksheet = XLSX.utils.json_to_sheet(this.filteredDonors);
    const workbook = { Sheets: { 'Donors': worksheet }, SheetNames: ['Donors'] };
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    FileSaver.saveAs(blob, 'Donor-Records.xlsx');
  }
}
