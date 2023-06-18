import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient.model';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients!: Patient[];
  searchBy: String = "name";
  searchTerm: String = "";
  currentPage: number = 1;
  totalPages: number = 0;
  pageNumbers: number[] = [];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.getPatients()
    this.calculatePageNumbers();
  }


  deletePatient(id?: number): void {
    this.patientService.deletePatient(id).subscribe(() => {
      // Remove the deleted patient from the local array
      this.patients = this.patients.filter(patient => patient.id !== id);
    });
  }

  getPatients() {
    this.patientService.getPatients(this.searchBy, this.searchTerm, this.currentPage).subscribe(data => {
      this.patients = data.patients;
      this.totalPages = data.totalPages
    });
  }

  calculatePageNumbers() {
    this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getPatients();
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getPatients();
    }
  }
}
