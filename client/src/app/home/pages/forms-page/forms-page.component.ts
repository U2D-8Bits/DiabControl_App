import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'home-forms-page',
  templateUrl: './forms-page.component.html',
  styleUrl: './forms-page.component.css',
})
export class FormsPageComponent implements OnInit{

  ngOnInit():void {
  }

}
