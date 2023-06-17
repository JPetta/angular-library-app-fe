import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {
  patient! : Patient
  
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private patientService : PatientService
  ){}

  ngOnInit() : void {
    const id = +this.route.snapshot.paramMap.get("id")!;
    this.patientService.getPatient(id).subscribe(data => {
      this.patient = data
    })
  }

  updatePatient() : void {
    this.patientService.updatePatient(this.patient).subscribe(data => {
      this.router.navigate(["/"])
    })
  }
}
