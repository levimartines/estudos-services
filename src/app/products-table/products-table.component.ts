import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ProductModel } from '../shared/models/product.model';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit, OnDestroy {
  @ViewChild(MatTable, {static: false}) table?: MatTable<any>;
  products: ProductModel[] = [];
  $subscription?: Subscription;
  displayedColumns: string[] = ['id', 'name', 'price', 'department'];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getAll();
    this.$subscription = this.productService.onNewProduct.subscribe(() => {
      this.table?.renderRows();
    });
    console.log(this.products);
  }

  ngOnDestroy(): void {
    this.$subscription?.unsubscribe();
  }

}
