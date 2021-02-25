import { EventEmitter, Injectable } from '@angular/core';
import { DepartmentModel } from '../models/department.model';
import { ProductModel } from '../models/product.model';
import { DepartmentService } from './department.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: ProductModel[] = [];
  onNewProduct = new EventEmitter<ProductModel>();

  private mockedDataFromServer: ProductFromServiceModel[] = [
    {id: 1, name: 'T-Shirt', department_id: 1, price: 40, description: 'A nice T-shirt'},
    {id: 2, name: 'Jeans', department_id: 1, price: 79.99, description: 'A blue jeans T-shirt'},
    {id: 3, name: 'Mouse', department_id: 2, price: 19.20, description: 'A gaming mouse'},
    {id: 4, name: 'Red Wine', department_id: 3, price: 1119.99, description: 'A expansive Red Wine'},
    {id: 5, name: 'White Wine', department_id: 3, price: 1999999.99, description: 'A expansive White Wine'},
  ];

  constructor(private departmentService: DepartmentService) {
    this.mockedDataFromServer.forEach(prod => {
      this.products.push({
        id: prod.id,
        name: prod.name,
        price: prod.price,
        description: prod.description,
        department: this.departmentService.getById(prod.department_id)
      });
    });
  }


  private getNextId(): number {
    return this.products.length + 1;
  }

  getAll(): ProductModel[] {
    return this.products;
  }

  add(object: ProductModel): void {
    object.id = this.getNextId();
    this.products.push(object);
    this.onNewProduct.emit(object);
  }

}

interface ProductFromServiceModel {
  id: number;
  name: string;
  department_id: number;
  price: number;
  description: string;
}

