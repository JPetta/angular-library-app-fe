import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient, PatientResponse } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPatients(searchBy : String, searchTerm : String, page : number): Observable<PatientResponse> {
    const url = `${this.apiUrl}/?${searchBy}=${searchTerm}&_page=${page}&_limit=5`;
    return this.http.get<PatientResponse>(url);
  }

  getPatient(id: number): Observable<Patient> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Patient>(url);
  }

  createPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.apiUrl, patient);
  }

  updatePatient(patient: Patient): Observable<Patient> {
    const url = `${this.apiUrl}/${patient.id}`;
    return this.http.put<Patient>(url, patient);
  }

  deletePatient(id?: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
