export interface Patient {
    id? : number,
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    gender: Gender;
    address: Address;
    phoneNumber: string;
  }
  
  export enum Gender {
    Male = 'MALE',
    Female = 'FEMALE',
    Other = 'OTHER'
  }
  
  export interface Address {
    address: string;
    suburb: string;
    state: string;
    postcode: string;
  }

  export interface PatientResponse {
    patients: Patient[];
    totalPages: number;
  }
  