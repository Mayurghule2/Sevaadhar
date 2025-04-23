import { Component, OnInit } from '@angular/core';
import { ProgramService } from 'src/app/services/program.service';
import { Program } from 'src/app/models/program';
@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {
  programs: Program[] = [];

  constructor(private programService: ProgramService) {}

  ngOnInit(): void {
    const storedData = localStorage.getItem('programStatus');

    this.programService.getAllPrograms().subscribe((data) => {
      if (storedData) {
        const savedStatuses = JSON.parse(storedData);
        this.programs = data.map((p) => ({
          ...p,
          isActive: savedStatuses[p.id] ?? p.isActive
        }));
      } else {
        this.programs = data;
      }
    });
  }
  loadPrograms(): void {
    this.programService.getAllPrograms().subscribe((data) => {
      this.programs = data;
    });
  }

  toggleStatus(program: Program): void {
    program.isActive = !program.isActive;
    this.saveStatusToLocalStorage();
  }

  saveStatusToLocalStorage(): void {
    const statusMap: Record<number, boolean> = {};
    this.programs.forEach((p) => {
      if (p.id !== undefined) statusMap[p.id] = p.isActive;
    });
    localStorage.setItem('programStatus', JSON.stringify(statusMap));
  }

  deleteProgram(id: number): void {
    if (confirm('Are you sure you want to delete this program?')) {
      this.programService.deleteProgram(id).subscribe(() => {
        this.loadPrograms(); // Refresh list after deletion
      });
    }
  }
}
