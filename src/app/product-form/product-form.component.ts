import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from '../shared/models/department.model';
import { ProductModel } from '../shared/models/product.model';
import { DepartmentService } from '../shared/services/department.service';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  department?: DepartmentModel;
  departments: DepartmentModel[] = [];
  name = '';
  price = 0;
  description = '';

  constructor(private productService: ProductService, private departmentService: DepartmentService) {
  }

  ngOnInit(): void {
    this.departments = this.departmentService.getAll();
    this.department = this.departments[0];
  }

  save(): void {
    const product: ProductModel = {
      name: this.name,
      price: this.price,
      description: this.description,
      department: this.department
    };
    this.productService.add(product);
  }

  clear(): void {
  }
}
