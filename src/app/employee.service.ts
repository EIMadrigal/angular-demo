import { Observable } from "rxjs";
import { Employee } from "./employee";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    private baseURL = "http://localhost:8080/employees";

    constructor(private httpClient: HttpClient) {
        
    }

    getAllEmployees(): Observable<Employee[]> {
        return this.httpClient.get<Employee[]>(this.baseURL);
    }

    getEmployeeById() {

    }

    createEmployee(employee: Employee): Observable<Object> {
        return this.httpClient.post(this.baseURL, employee);
    }

    updateEmployee() {

    }

    deleteEmployee() {

    }
}