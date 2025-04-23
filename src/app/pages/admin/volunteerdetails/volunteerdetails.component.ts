import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { VolunteerService } from 'src/app/services/volunteer.service';

@Component({
  selector: 'app-volunteerdetails',
  templateUrl: './volunteerdetails.component.html',
  styleUrls: ['./volunteerdetails.component.css']
})
export class VolunteerdetailsComponent {

  volunteers: any[] = [];

  constructor(private volunteerService: VolunteerService) {}

  ngOnInit(): void {
    this.loadVolunteers();
  }

  loadVolunteers(): void {
    this.volunteerService.getAllVolunteers().subscribe(
      (data) => {
        this.volunteers = data;
        this.filteredVolunteers = [...data];
      },
      (error) => {
        console.error('Error fetching volunteer data:', error);
      }
    );
  }

  

  selectedAreaOfInterest = '';
  selectedGender = '';
  filteredVolunteers: any[] = [];

  applyFilters(): void {
    this.filteredVolunteers = this.volunteers.filter((v) => {
      return (
        (!this.selectedAreaOfInterest || v.volunteeringAreasOfInterest === this.selectedAreaOfInterest) &&
        (!this.selectedGender || v.gender === this.selectedGender)
      );
    });
  }
  
  // Reset the right filter when left filter changes
  onLeftFilterChange(): void {
    // Reset right filter when left filter is changed
    this.selectedAreaOfInterest = '';
    this.applyFilters();
  }

  resetFilter(): void {
    this.selectedAreaOfInterest = '';
    this.selectedGender = '';
    this.filteredVolunteers = [...this.volunteers];
  }

  

  downloadExcel() {
    const worksheet = XLSX.utils.json_to_sheet(this.filteredVolunteers);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    FileSaver.saveAs(data, 'Volunteer_Report.xlsx');
  }
}
