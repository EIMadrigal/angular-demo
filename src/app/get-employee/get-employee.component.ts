import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './get-employee.component.html',
  styleUrl: './get-employee.component.css'
})
export class GetEmployeeComponent {

  constructor() {
    console.log("all employees");
  }

  onSubmit() {
    console.log("Search all employees");
  }
}
