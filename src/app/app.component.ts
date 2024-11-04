import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateEmployeeComponent, GetEmployeeComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-demo';
}
