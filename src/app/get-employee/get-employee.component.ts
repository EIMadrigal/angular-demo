import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-employee',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './get-employee.component.html',
  styleUrl: './get-employee.component.css'
})
export class GetEmployeeComponent {

  employees: Employee[];

  constructor(private employeeService: EmployeeService, private router: Router) {
    this.employees = [];
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  updateEmployee(id: any) {
    // console.log(this.router.config);
    this.router.navigate(["update-employee", id]);
  }

  deleteEmployee(id: any) {

  }

  viewEmployee(id: any) {

  }

  onSubmit() {
    this.getAllEmployees();
  }
}
