import { Injectable } from '@angular/core';
import { DepartmentModel } from '../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  departments: DepartmentModel[] = [
    {
      id: 1,
      name: 'Clothing'
    },
    {
      id: 2,
      name: 'Electronics'
    },
    {
      id: 3,
      name: 'Drinks'
    }
  ];

  constructor() {
  }

  getById(id: number): DepartmentModel | undefined {
    return this.departments.find(obj => obj.id === id);
  }

  getAll(): DepartmentModel[] {
    return this.departments;
  }

  private getNextId(): number {
    return this.departments.length + 1;
  }

  add(object: DepartmentModel): void {
    object.id = this.getNextId();
    this.departments.push(object);
  }
}
