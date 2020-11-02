import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { IProduct } from './interfaces/IProduct';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'online-shopping-site-angular';
  searchKeyword = '';
  products: IProduct[] = [];

  constructor(private commonService: CommonService){}

  searchClicked() {
    this.commonService.searchForProducts(this.searchKeyword).subscribe(data => {
        console.log(data);
        this.products = data;        
    }, err => {
        console.error(err);
    });
  }
}
