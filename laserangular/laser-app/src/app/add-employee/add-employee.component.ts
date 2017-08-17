import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Employee} from '../employee';
@Component({
  selector: 'laser-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  data: DataService;
  employee: Employee;
  constructor(dataService: DataService) { 
    this.data = dataService;
    this.employee = new Employee;

  }

  ngOnInit() 
  {
    
  }

  onSave(employee){
    console.log("SAVING: ", employee);
    this.data.addEmployee(employee);
  }

}
