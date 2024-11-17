import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { error } from 'console';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {

  id!: number;
  employee: Employee = new Employee("", "", "");
  
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      console.log(data);
      this.goEmployeeList();
    }, (error: any) => console.log(error));
  }

  goEmployeeList() {
    console.log(this.router.config);
    this.router.navigate(['employees']);
  }

}
