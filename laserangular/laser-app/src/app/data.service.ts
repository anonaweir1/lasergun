import { Injectable } from '@angular/core';
import { Employee } from './employee';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from "@angular/http";

@Injectable()
export class DataService {
  http;
  employees: Employee[];

  constructor(http: HttpClient) { this.http = http;}
  
  //finish adding this
  addEmployee(emp: Employee): void{

    const body = {
      name: emp.name,
      address: emp.address,
      initialSalary: emp.initialSalary,
      nin: emp.nin,
      bankAccountNo: emp.bankAccountNo,
      sortCode: emp.sortCode,
      departmentID: emp.departmentID
   };
   console.log(body.name);
   const options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  }
  
   
   // return this.http.post("/api/new_employee", body, options).subscribe();
    return this.http.post("/api/new", body, options).subscribe();
  }

}


