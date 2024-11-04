import { Routes } from '@angular/router';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

export const routes: Routes = [
    { path: 'employees', component: GetEmployeeComponent },
    { path: 'create-employee', component: CreateEmployeeComponent }
];
