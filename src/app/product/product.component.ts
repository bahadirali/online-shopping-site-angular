import { Component, Input } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';

@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {

    @Input() prod: IProduct;

    constructor() { }
}