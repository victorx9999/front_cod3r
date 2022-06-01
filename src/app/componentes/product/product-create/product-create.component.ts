import { Product } from './../product.model';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

  }

  createProduct(): void {
    console.log('CLICOU')
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Operação Concluída')
      this.router.navigate(['/products'])

    })

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
