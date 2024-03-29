import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

//CommonModule felelős az *NgIf és az *NgFor használatáért
@Component({
  selector: 'app-interface-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interface-example.component.html',
  styleUrl: './interface-example.component.css'
})
export class InterfaceExampleComponent {

//publikus, szabadon elérhető/felülírható
  // employeeElement: Employee = {
  //   name:"John Doe",
  //   salary:850000,
  //   role: "Angular programmer"
  // }

  private employeeAvgSalary: number =0.0;

  private employeeElement: Employee = {
    name: "John Doe",
    salary: 850000,
    role: "Angular programmer"
  }

  private employees:Employee[] = [
    {
      name: "Jane Doe",
      salary: 550000,
      role: "UX designer"
    },
    {
      name: "Jonnie Doe",
      salary: 980000,
      role: "Dev ops"
    },
    {
      name: "Teszt Elek",
      salary: 680000,
      role: "PHP programmer"
    },
    {
      name: "Gipsz Jakab",
      salary: 560000,
      role: "PHP programmer"
    },
    {
      name: "Nap Pali",
      salary: 980000,
      role: "Angular programmer"
    },
  ];
Employee: any;

  public get Employees():Employee[] {
    return this.employees;
  }

  public get EmployeeElement(): Employee {
    return this.employeeElement;
  }

  public get EmployeeAvgSalary(): number {
    let sum = 0.0;
    this.employees.forEach(employee =>{
      sum+=employee.salary;
    });
    return sum / this.employees.length;
  }

  public getAllEmployeesData(): string {
      let result:string = "";
      for (let employee of this.employees) {
        result += employee.name + ", " + employee.role + ", " + employee.salary;
      }
      return result;
  }

  public getMaxEmployeeSalary(): number {
    let max = this.employees[0].salary;
    this.employees.forEach(employee =>{
      if (employee.salary > max){
        max = employee.salary;
      }
    });
    return max;
  }
}

//adatszerkezet leírása (amit kötelezően meg kell adni)
export interface Employee {
  name: string;
  salary: number; //fizetés
  role: string; //beosztás
}