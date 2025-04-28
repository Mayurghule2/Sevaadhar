import { Component,OnInit } from '@angular/core';

import { ProgramApplicationService } from 'src/app/services/program-application.service';
import { ProgramApplicationDisplay,ProgramApplicationRaw } from 'src/app/services/program-application.service';
import { Program } from 'src/app/models/program';
import { ProgramService } from 'src/app/services/program.service';
@Component({
  selector: 'app-programregisteredvolunteer',
  templateUrl: './programregisteredvolunteer.component.html',
  styleUrls: ['./programregisteredvolunteer.component.css']
})
export class ProgramregisteredvolunteerComponent implements OnInit {
  applications: ProgramApplicationDisplay[] = [];
  errorMessage: string | null = null;
  loading: boolean = false;

  constructor(private programApplicationService: ProgramApplicationService) {}

  ngOnInit(): void {
    this.loadApplications();
   }

   

   loadApplications(): void {
    this.loading = true;
    this.programApplicationService.getAllApplications().subscribe({
      next: (data: ProgramApplicationRaw[]) => {
        console.log('Fetched applications:', data);
        // Map the raw data to the display format
        this.applications = data.map(app => ({
          id: app.id,
          programId: app.program.id,
          programTitle: app.program.title,
          volunteerId: app.volunteer.id,
          volunteerName: app.volunteer.fullName,
          desiredRole: app.desiredRole,
          appliedOn: app.appliedOn,
          applicationStatus: app.applicationStatus
        }));
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load applications. Please try again.';
        console.error('Error fetching applications:', err);
        this.loading = false;
      }
    });
  }

  

  deleteApplication(id: number): void {
    if (confirm('Are you sure you want to delete this application?')) {
      this.programApplicationService.delete(id).subscribe({
        next: () => {
          // Remove the deleted application from the array
          this.applications = this.applications.filter(app => app.id !== id);
          alert('Application deleted successfully.');
        },
        error: (err) => {
          this.errorMessage = 'Failed to delete application. Please try again.';
          console.error('Error deleting application:', err);
        }
      });
    }
  }

}
