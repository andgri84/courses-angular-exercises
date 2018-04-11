import { Employee } from './../vo/employee';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
  constructor() { }

  generateEmployee(): Employee {
    const e = new Employee();
    e.firstName = 'Test';
    return e;
  }
}
