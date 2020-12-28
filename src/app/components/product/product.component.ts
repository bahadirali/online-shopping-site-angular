import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';
import { CommonService } from 'src/app/services/common.service';

@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {

    @Input() prod: IProduct;

    constructor(private commonService: CommonService) { }

    buyProduct(): void {
        this.commonService.buyProduct(this.prod).subscribe(res => {
            console.log(res);
            if(res) {
                this.prod.boughtByMe = true;
            }
        }, err => {
            console.log(err);
        });
    }

    returnProduct(): void {
        this.commonService.returnProduct(this.prod).subscribe(res => {
            console.log(res);
            if(res) {
                this.prod.boughtByMe = false;
            }
        }, err => {
            console.log(err);
        });
    }
}