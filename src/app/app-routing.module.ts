import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientCreateComponent } from './patient-create/patient-create.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';


const routes: Routes = [
  { path: '', component: PatientListComponent },
  { path: 'patient/:id', component: PatientDetailsComponent },
  { path: 'create', component: PatientCreateComponent },
  { path: 'edit/:id', component: PatientEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
