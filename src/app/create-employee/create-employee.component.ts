import { Component, NgModule, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {

  employee: Employee = new Employee(0, "", "", "");
  
  // constructor(private employeeService: EmployeeService) {
  //   console.log(this.employee);
  // }

  constructor() {

  }

  createEmployee() {
    //this.employeeService.createEmployee();
  }

  onSubmit() {
    console.log(this.employee);
    this.createEmployee();
  }

}
