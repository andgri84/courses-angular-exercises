import { Job, User } from './../vo/';
import { Employee } from './../vo/employee';
import { EmployeeService } from './employee.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  constructor(private employeeService: EmployeeService) {

  }

  getEmplyeeList(): Array<Employee> {
    const list = new Array<Employee>();
    for (let i = 0; i < 10; i++) {
      list.push(this.employeeService.generateEmployee());
    }
    return list;
  }

}
