import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchKeyword = '';
  products: IProduct[] = [];

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }

  searchClicked() {
    this.commonService.searchForProducts(this.searchKeyword).subscribe(data => {
        this.products = data;        
    }, err => {
        console.error(err);
    });
  }
}
