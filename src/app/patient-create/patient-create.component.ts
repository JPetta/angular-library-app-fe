import { Component, OnInit } from '@angular/core';
import { Gender, Patient, Address } from '../models/patient.model';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent {
  
  address : Address = {
    address : "",
    suburb : "",
    state : "",
    postcode : ""
  }

  firstName : String = ""

  newPatient : Patient = {
    firstName : "",
    lastName : "",
    dateOfBirth : new Date(),
    gender : Gender.Other,
    address : this.address,
    phoneNumber : ""
  }

  constructor(
    private router : Router,
    private patientService : PatientService
  ){}

  createPatient(): void {
    this.patientService.createPatient(this.newPatient).subscribe(data => {
      this.router.navigate(['/'])
    })
  }
}
