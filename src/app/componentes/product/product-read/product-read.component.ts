import { ProductService } from './../product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../product.model';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog/dialog';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = [];
  displayedColumns: string[] = ['id', 'name', 'price','action'];
  dataSource: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products;
      this.dataSource = new MatTableDataSource(this.products);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}
