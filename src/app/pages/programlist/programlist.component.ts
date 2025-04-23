import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Program } from 'src/app/models/program';
import { Router } from '@angular/router';
import { ProgramService } from 'src/app/services/program.service';



@Component({
  selector: 'app-programlist',
  templateUrl: './programlist.component.html',
  styleUrls: ['./programlist.component.css']
})
export class ProgramlistComponent {
  programs: Program[] = [];

  constructor(private http: HttpClient, private router: Router,private programService: ProgramService) {}

  ngOnInit(): void {
    this.programService.getAllPrograms().subscribe((data) => {
      const statusMap = JSON.parse(localStorage.getItem('programStatus') || '{}');
      this.programs = data.filter((p) => statusMap[p.id] !== false); // false means "deactivated"
    });
  }
  fetchPrograms() {
    this.http.get<Program[]>('http://localhost:9090/api/programs')
      .subscribe(data => this.programs = data);
  }

  applyToProgram(programId: number) {
    this.router.navigate(['/new-event-volunteer-registration'], {
      queryParams: { programId }
    });
  }
}
