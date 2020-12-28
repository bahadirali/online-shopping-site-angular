import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  products: IProduct[] = [];
  
  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.getMyBoughtProducts().subscribe(data => {
      this.products = data;        
    }, err => {
        console.error(err);
    });
  }

}
