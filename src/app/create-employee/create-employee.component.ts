import { Component, NgModule, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { error } from 'console';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {

  employee: Employee = new Employee("", "", "");
  
  constructor(private employeeService: EmployeeService) {
    
  }

  createEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
    }, error => console.log(error));
  }

  onSubmit() {
    console.log(this.employee);
    this.createEmployee();
  }

}
