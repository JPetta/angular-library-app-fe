import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  patient!: Patient;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.patientService.getPatient(id).subscribe(data => {
      this.patient = data;
    });
  }

  deletePatient(id?: number): void {
    this.patientService.deletePatient(id).subscribe(() => {
      // Remove the deleted patient from the local array
      this.router.navigate(['/'])
    });
  }
}