import { DepartmentModel } from './department.model';

export interface ProductModel {
  id?: number;
  name: string;
  price: number;
  description: string;
  department?: DepartmentModel;
}
